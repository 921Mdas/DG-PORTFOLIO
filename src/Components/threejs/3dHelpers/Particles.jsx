import * as THREE from "three";
import { useMemo, useState, useRef, useEffect } from "react";
import { createPortal, useFrame } from "@react-three/fiber";
import { useFBO } from "@react-three/drei";
import "../Effect/Shaders/simulationMaterial";
import "../Effect/Shaders/dofPointsMaterial";
import imagez from "../../../assets/Images/girl.png";

function Particles({
  speed,
  fov,
  aperture,
  focus,
  curl,
  size = 256,
  ...props
}) {
  const simRef = useRef();
  const renderRef = useRef();
  // Set up FBO
  const scene = useRef(new THREE.Scene()).current;
  const camera = useRef(
    new THREE.OrthographicCamera(-2, 0.1, 0.5, 0, 0.5 / Math.pow(2, 53), 0.5)
  ).current;

  const [textureLoaded, setTextureLoaded] = useState(false);
  const [particleTexture, setParticleTexture] = useState();

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    // Replace "path/to/your/particle_texture.jpg" with the actual path to your image file
    textureLoader.load(imagez, texture => {
      setParticleTexture(texture);
      setTextureLoaded(true);
    });
  }, []);

  const positions = useMemo(
    () =>
      new Float32Array([
        -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
      ]),
    []
  );
  const uvs = useMemo(
    () => new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]),
    []
  );
  const target = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType,
  });
  // Normalize points
  const particles = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      let i3 = i * 3;
      particles[i3 + 0] = (i % size) / size;
      particles[i3 + 1] = i / size / size;
    }
    return particles;
  }, [size]);
  // Update FBO and pointcloud every frame
  // Import the correct dofPointsMaterial component (use the actual path to the component)

  // Inside the Particles component...
  // ... (previous code)

  useFrame(({ gl, clock }) => {
    // Set the render target to the FBO
    gl.setRenderTarget(target);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    // Check if renderRef.current is defined before updating uniforms
    if (renderRef.current) {
      // Update the points material with the current state values
      renderRef.current.uniforms.positions.value = target.texture;
      renderRef.current.uniforms.uTime.value = clock.elapsedTime;
      renderRef.current.uniforms.uFocus.value = THREE.MathUtils.lerp(
        renderRef.current.uniforms.uFocus.value,
        focus,
        0.1
      );
      renderRef.current.uniforms.uFov.value = THREE.MathUtils.lerp(
        renderRef.current.uniforms.uFov.value,
        fov,
        0.1
      );
      renderRef.current.uniforms.uBlur.value = THREE.MathUtils.lerp(
        renderRef.current.uniforms.uBlur.value,
        (5.6 - aperture) * 9,
        0.1
      );
    }

    // Check if simRef.current is defined before updating uniforms
    if (simRef.current) {
      // Update the simulation material with the current state values
      simRef.current.uniforms.uTime.value = clock.elapsedTime * speed;
      simRef.current.uniforms.uCurlFreq.value = THREE.MathUtils.lerp(
        simRef.current.uniforms.uCurlFreq.value,
        curl,
        0.1
      );
    }
  });

  // useFrame(state => {
  //   state.gl.setRenderTarget(target);
  //   state.gl.clear();
  //   state.gl.render(scene, camera);
  //   state.gl.setRenderTarget(null);
  //   renderRef.current.uniforms.positions.value = target.texture;
  //   renderRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  //   renderRef.current.uniforms.uFocus.value = THREE.MathUtils.lerp(
  //     renderRef.current.uniforms.uFocus.value,
  //     focus,
  //     0.1
  //   );
  //   renderRef.current.uniforms.uFov.value = THREE.MathUtils.lerp(
  //     renderRef.current.uniforms.uFov.value,
  //     fov,
  //     0.1
  //   );
  //   renderRef.current.uniforms.uBlur.value = THREE.MathUtils.lerp(
  //     renderRef.current.uniforms.uBlur.value,
  //     (5.6 - aperture) * 9,
  //     0.1
  //   );
  //   simRef.current.uniforms.uTime.value = state.clock.elapsedTime * speed;
  //   simRef.current.uniforms.uCurlFreq.value = THREE.MathUtils.lerp(
  //     simRef.current.uniforms.uCurlFreq.value,
  //     curl,
  //     0.1
  //   );
  // });

  return (
    <group position={[0, 0, 0]}>
      {/* Simulation goes into a FBO/Off-buffer */}
      {createPortal(
        <mesh>
          <simulationMaterial ref={simRef} />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      {/* The result of which is forwarded into a pointcloud via data-texture */}
      {textureLoaded && particleTexture && (
        <points {...props}>
          <dofPointsMaterial
            ref={renderRef}
            map={particleTexture} // Set the particleTexture as the map
          />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particles.length / 3}
              array={particles}
              itemSize={3}
            />
          </bufferGeometry>
        </points>
      )}
    </group>
  );

  // return (
  //   <group position={[0, 0, 0]}>
  //     {/* Simulation goes into a FBO/Off-buffer */}
  //     {createPortal(
  //       <mesh>
  //         <simulationMaterial ref={simRef} />
  //         <bufferGeometry>
  //           <bufferAttribute
  //             attach="attributes-position"
  //             count={positions.length / 3}
  //             array={positions}
  //             itemSize={3}
  //           />
  //           <bufferAttribute
  //             attach="attributes-uv"
  //             count={uvs.length / 2}
  //             array={uvs}
  //             itemSize={2}
  //           />
  //         </bufferGeometry>
  //       </mesh>,
  //       scene
  //     )}
  //     {/* The result of which is forwarded into a pointcloud via data-texture */}
  //     <points {...props}>
  //       <dofPointsMaterial ref={renderRef} />
  //       <bufferGeometry>
  //         <bufferAttribute
  //           attach="attributes-position"
  //           count={particles.length / 3}
  //           array={particles}
  //           itemSize={3}
  //         />
  //       </bufferGeometry>
  //     </points>
  //   </group>
  // );
}

export default Particles;