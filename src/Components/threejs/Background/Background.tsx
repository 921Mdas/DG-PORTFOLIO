import React, { useRef, useLayoutEffect } from "react";
import * as THREE from "three";
import Lens from "../3d cursor/Lens.tsx";
import Rbtc from "../../../assets/Fonts/Rbtc.ttf";
import { useControls } from "leva";
import { Particles } from "./Particles";
import { Html, useGLTF, useScroll, Cloud } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import Env from "../../../assets/models/envelope.glb";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Bulb from "../3d cursor/Bulb";
import Steps from "../../../assets/models/steps.glb";
import { Debug, Physics, RigidBody } from "@react-three/rapier";
import { useThree } from "@react-three/fiber";
import cloud from "../../../assets/models/cloud.glb";
import bust from "../../../assets/models/bust.glb";

gsap.registerPlugin(MotionPathPlugin);

const Face = () => {
  return (
    <group>
      <Lens
        position={new THREE.Vector3(0, 0, 0)}
        text={``}
        font={Rbtc}
        textSize={0.5}
        scale={0.5}
      />
    </group>
  );
};

const Thought = () => {
  const robot = useRef();
  const scroll = useScroll();
  const tl = useRef();

  const { camera } = useThree();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 5, ease: "power1.inOut" },
    });

    const tlx = tl.current;
    // tlx.to(robot.current.position, {
    //   motionPath: {
    //     path: [
    //       { x: -1.5, y: Math.sin(0) * 1.5, z: 0 },
    //       { x: 0, y: Math.sin(1) * 1.5, z: 0 },
    //       { x: 1, y: Math.sin(2) * 1.5, z: 0 },
    //       { x: 0, y: Math.sin(3) * 1.5, z: 0 },
    //       { x: 1.5, y: Math.sin(4) * 0.5, z: 0 },
    //     ],
    //     autoRotate: true,
    //   },
    // });

    //  { x: -0.5, y: Math.sin(0) * 0, z: 4 },
    //       { x: 4, y: Math.sin(1) * -2, z: 5 },
    //       { x: -2.5, y: Math.sin(1) * -3, z: 2 },
    // { x: 0, y: Math.sin(3) * 1.5, z: 0 },
    // { x: 1.5, y: Math.sin(4) * 0.5, z: 0 },

    tlx.to(camera.position, {
      motionPath: {
        path: [
          { x: -0.5, y: Math.sin(0) * 0, z: 4 },
          { x: 0.5, y: Math.sin(1) * -2, z: 5 },
          { x: -2.5, y: Math.sin(1) * -3, z: 3 },
          { x: 0, y: Math.sin(2) * -3.5, z: 6 },
          // { x: 0, y: Math.sin(3) * 1.5, z: 0 },
          // { x: 1.5, y: Math.sin(4) * 0.5, z: 0 },
        ],
        autoRotate: true,
      },
    });
  }, []);
  return <></>;
};

const Rock = props => {
  const { scene } = useGLTF(Steps);
  return <primitive object={scene} {...props} />;
};

export function CustomCloud(props) {
  const { nodes, materials } = useGLTF(cloud);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.79, 0, -5.26]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Plane001_08_-_Default_0"].geometry}
              material={materials["08_-_Default"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

const Plane = ({ args, position, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={args} />;
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

const Foundation = props => {
  const { nodes, materials } = useGLTF(bust);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 1.84, 0]}
        scale={[1, 3.17, 1]}
      />
    </group>
  );
};

const Background = ({ perfSucks }) => {
  const props = useControls("particles", {
    focus: { value: 6.33, min: 3, max: 7, step: 0.01 },
    speed: { value: 8.9, min: 0.1, max: 100, step: 0.1 },
    aperture: { value: 5.5, min: 1, max: 5.6, step: 0.1 },
    fov: { value: 174, min: 0, max: 200 },
    curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 },
  });

  return (
    <>
      <Physics gravity={[0, -5, 0]}>
        {/* <Debug /> */}
        <Face />
        <Foundation
          position={[0.1, -5, -3.2]}
          rotation={[0, Math.PI, 0]}
          scale={0.7}
        />

        <Bulb />

        {/* <RigidBody
          colliders="ball"
          friction={0}
          restitution={0}
          gravityScale={0.5}
        >
          <Bulb />
        </RigidBody> */}
        {/* <Bulb /> */}

        <CustomCloud scale={0.05} position={[0.5, -0.1, -2]} />
        <CustomCloud scale={0.07} position={[-0.1, 0, -2]} />
        <RigidBody gravityScale={0.2} colliders="cuboid">
          <Plane
            args={[0.1, 0.65, 0.1]}
            position={[0, 3, -5.5]}
            color="orangered"
          />
        </RigidBody>
        <RigidBody gravityScale={0.2} colliders="cuboid">
          <Plane
            args={[0.1, 0.65, 0.1]}
            position={[0.5, 3, -3.5]}
            color="lightgreen"
          />
        </RigidBody>
        <RigidBody gravityScale={0.5} colliders="cuboid">
          <Plane
            args={[0.1, 0.6, 0.1]}
            position={[0.1, 3, -3.5]}
            color="darkred"
          />
        </RigidBody>
        <RigidBody gravityScale={0.5} colliders="cuboid">
          <Plane args={[0.1, 0.5, 0.1]} position={[0.1, 3, -5]} color="white" />
        </RigidBody>
        <RigidBody type="fixed" colliders="hull">
          <Rock
            position={[0, -0.5, -4]}
            rotation={[0, Math.PI * -0.5, 0]}
            scale={0.06}
          />
        </RigidBody>
      </Physics>
      <Thought />
    </>
  );
};

export default Background;
