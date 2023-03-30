import React, { useRef, useState, useEffect } from "react";
import { Instances, Scroll, ScrollControls, useGLTF } from "@react-three/drei";
import heart from "../../../assets/models/golem_heart.glb";
import { Float, Decal, AdaptiveDpr } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { useControls } from "leva";
import * as THREE from "three";
import Lens from "../3d cursor/Lens.tsx";
import { Scrambler } from "../../../Helper/helper";
import { useThree } from "react-three-fiber";
import Rbtc from "../../../assets/Fonts/Rbtc.ttf";
import { Instance } from "@react-three/drei";
import { LensesInstances } from "../3d cursor/Lens.tsx";
export const Sourround = props => {
  const meshStand = new THREE.MeshStandardMaterial({
    envMapIntensity: 2,
    metalness: 1,
    roughness: 0.28,
    toneMapped: false,
    opacity: 1,
    transparent: true,
    color: "black",
    side: THREE.FrontSide,
    blending: THREE.AdditiveBlending,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    wireframe: true,
  });

  const {
    positionx,
    positiony,
    positionz,
    spkx,
    spky,
    spkz,
    rotationy,
    rotationz,
  } = useControls("brain", {
    positionx: { value: -1.3, min: -10, max: 10, step: 0.1 },
    positiony: { value: -0.4, min: -5, max: 5, step: 0.1 },
    positionz: { value: 1.2, min: -5, max: 5, step: 0.1 },
    rotationx: { value: -3.4, min: -10, max: 5, step: 0.1 },
    rotationy: { value: 1.5, min: -5, max: 5, step: 0.1 },
    rotationz: { value: -0.9, min: -5, max: 5, step: 0.1 },
    spkx: { value: 0, min: -5, max: 5, step: 0.1 },
    spky: { value: 0, min: -5, max: 5, step: 0.1 },
    spkz: { value: 0, min: -5, max: 5, step: 0.1 },
  });

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.3} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 2]}
          >
            <group position={[-1.8, -3, -4.7]}>
              <mesh scale={0.2} material={meshStand}>
                <icosahedronGeometry />
              </mesh>
            </group>
          </Float>
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.3} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 2]}
          >
            <group position={[3.5, -6, -4.7]}>
              <mesh scale={0.4} material={meshStand}>
                <icosahedronGeometry />
              </mesh>
            </group>
          </Float>
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.3} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 2]}
          >
            <group position={[3.5, -6, -4.7]}>
              <mesh scale={0.4} material={meshStand}>
                <icosahedronGeometry />
              </mesh>
            </group>
          </Float>

          <Float>
            <group position={[-1.6, -1.0, 0.1]}>
              <mesh scale={0.5} material={meshStand}>
                <icosahedronGeometry />
              </mesh>
            </group>
          </Float>
        </group>
      </group>
    </group>
  );
};

const Foreground = () => {
  const { nodes, scene } = useGLTF(heart);
  const heartRef = useRef();
  const meshRef = useRef();
  const [time, setTime] = useState(new Date());
  const { gl } = useThree();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useFrame(({ clock }) => {
    const scale = 1 + 0.05 * Math.sin(clock.elapsedTime * 2);
    heartRef.current?.scale.set(scale * 0.005, scale * 0.005, scale * 0.005);
  });

  return (
    <group>
      <Lens
        position={new THREE.Vector3(0, 0, -5)}
        text={``}
        font={Rbtc}
        textSize={0.5}
        scale={1}
      />
    </group>
  );
};

export default Foreground;

// "Crystal Golem Heart" (https://skfb.ly/6YsUs) by Artsem Kalitsenya is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
