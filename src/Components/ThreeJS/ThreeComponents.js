import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { useSphere, usePlane, useCompoundBody } from "@react-three/cannon";
import { useAnimations } from "@react-three/drei";
import {
  useTexture,
  useGLTF,
  Float,
  MeshReflectorMaterial,
  ContactShadows,
} from "@react-three/drei";
import { gsap } from "gsap";
import { useThree } from "@react-three/fiber";

import Tron1 from "../../assets/models/Tron grid 1.jpg";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// texture
import TerrainNormal from "../../assets/Texture/terrain-normal.jpeg";
import TerrainRough from "../../assets/Texture/terrain-roughness.jpeg";

// models
import Figure from "../../assets/models/gravityTron.glb";
import BuildingModel from "../../assets/models/Building.glb";
import ROBOTHEAD from "../../assets/models/robot_head.glb";
import ProjectModel from "../../assets/models/projects.glb";
import Kingo from "../../assets/models/king.glb";
import Doggo from "../../assets/models/pakkunnaruto.glb";
import CatRigged from "../../assets/models/cat_rigged.glb";
import BulletRouge from "../../assets/models/bullet.glb";
import Arrow from "../../assets/models/arrow.glb";
import Street from "../../assets/models/street_sign.glb";
import Trash from "../../assets/models/trash_can.glb";
import Fire from "../../assets/models/fire_hydrant.glb";
import Mail from "../../assets/models/mailbox.glb";
import Mondeo from "../../assets/models/mondeo_taxi.glb";
import grass1 from "../../assets/models/lump_grass.glb";
import grass2 from "../../assets/models/gameready_grass.glb";
import wires from "../../assets/models/electric_wires.glb";

import { LinearEncoding, RepeatWrapping } from "three";
import { MeshPhysicalMaterial } from "three";

const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "blue",
  roughness: 0,
  envMapIntensity: 0.2,
  emissive: "#010e4a",
});

export const GrassOne = props => {
  const { nodes, materials } = useGLTF(grass1);
  return (
    <group {...props} dispose={null} position={[0, 0, 0]} scale={[1, 1, 1]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-502.37, 0, 274.11]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.43}
          >
            <mesh
              geometry={nodes["foli_komish_Material_#27_0"].geometry}
              material={materials.Material_27}
            />
          </group>
          <group
            position={[-502.37, 0, 274.11]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.43}
          >
            <mesh
              geometry={nodes["trunks_komish_Material_#26_0"].geometry}
              material={materials.Material_26}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export const GrassTwo = ({ scale, position }) => {
  const { nodes, materials } = useGLTF(grass2);
  return (
    <group dispose={null} position={position} scale={scale}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 99.89, 0]}
            rotation={[0, Math.PI / 4, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Plane003__0.geometry}
              material={materials["Scene_-_Root"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export const StandardMesh = () => {
  const texture = useTexture(Tron1);

  return <meshStandardMaterial color="white" />;
};
export const Box = ({ color, positions, handleWork }) => {
  const [ref] = useCompoundBody(() => ({
    mass: 0,
    shapes: [{ type: "Box", args: [1, 1, 1] }],
    position: [0, 0.5, 0],
  }));

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      onClick={e => {
        e.object.material.color.set("red");
        handleWork();
        // e.object.position.set([3, 6, 1]);
        // console.log(e.object.material.color.set("red"));
      }}
    >
      <boxGeometry args={[1, 1, 1]} position={[0, 5, 0]} />
    </mesh>
  );
};
export const Cat = props => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(CatRigged);
  const [ref] = useCompoundBody(() => ({
    mass: 0,
    type: "Static",
    shapes: [
      {
        type: "Box",
        args: [3, 1, 1],
        position: [0, 4, -0.7],
        rotation: [0, 0, 0.5],
      },
    ],
  }));
  const { actions } = useAnimations(animations, group);
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, 2.5, -0.7]}
      rotation={[0, 0, 0.5]}
      castShadow
      receiveShadow
    >
      <group name="Sketchfab_Scene" receiveShadow castShadow>
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
          castShadow
        >
          <group
            name="cat_riggedfbx"
            rotation={[Math.PI / 2, 0, 0]}
            receiveShadow
            castShadow
          >
            <group name="Object_2" receiveShadow castShadow>
              <group name="RootNode" receiveShadow castShadow>
                <group
                  name="Armature"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                  receiveShadow
                  castShadow
                >
                  <group name="Object_6" receiveShadow castShadow>
                    <primitive
                      object={nodes._rootJoint}
                      receiveShadow
                      castShadow
                    />
                    <group
                      name="Object_8"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                      receiveShadow
                      castShadow
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials["Scene_-_Root"]}
                      skeleton={nodes.Object_9.skeleton}
                      receiveShadow
                      castShadow
                    />
                  </group>
                </group>
                <group
                  name="reference"
                  position={[109.92, -16.3, -165.94]}
                  scale={66.82}
                  receiveShadow
                  castShadow
                />
                <group
                  name="mesh_cat"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                  receiveShadow
                  castShadow
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};
export const Building = props => {
  const { nodes, materials } = useGLTF(BuildingModel);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane_1.geometry} material={materials.building} />
      <mesh geometry={nodes.Plane_2.geometry} material={materials.window} />
    </group>
  );
};
export const SquareBox = ({ color, size }) => {
  const [ref] = useCompoundBody(() => ({
    mass: 1,
    shapes: [{ type: "Box", args: size }],
    position: [0, 8, -0.5],
  }));

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[0.5, 0.5, 0.5]} position={[0, 8, 2]} />
    </mesh>
  );
};
export const SquareBoxXL = ({ color, size }) => {
  const [ref] = useCompoundBody(() => ({
    mass: 1,
    shapes: [{ type: "Box", args: size }],
    position: [-2, 8, 0.3],
  }));

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} position={[0, 8, 2]} />
      <meshPhysicalMaterial
        color="#efefef"
        transmission={3}
        roughness={0}
        thickness={100}
        envMapIntensity={0}
      />
    </mesh>
  );
};
export const SquareBoS = ({ color, size }) => {
  const [ref] = useCompoundBody(() => ({
    mass: 1,
    shapes: [{ type: "Box", args: size }],
    position: [3, 13, 0.3],
  }));

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} position={[0, 8, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
};
export const CreateSphere = ({ positions, radius }) => {
  const [ref] = useSphere(() => ({
    mass: 1,
    position: positions,
    args: [radius],
  }));

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      position={positions}
      material={baubleMaterial}
    >
      <sphereGeometry args={[radius]} castShadow receiveShadow />
    </mesh>
  );
};
export const Plane = ({ positions }) => {
  const textureNormal = useTexture(TerrainNormal);
  const textureRough = useTexture(TerrainRough);

  const [ref] = usePlane(() => ({
    mass: 0,
    type: "Static",
    position: positions,
    rotation: [-Math.PI * 0.5, 0, 0],
  }));
  useEffect(() => {
    [textureNormal, textureRough].forEach(t => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.set(5, 5);
      t.offset.set(0, 0);
    });

    textureNormal.encoding = LinearEncoding;
    textureRough.encoding = LinearEncoding;
  }, [textureNormal, textureRough]);

  return (
    <mesh ref={ref} rotation={[-Math.PI * 0.5, -3, 0]}>
      <planeGeometry args={[50, 50]} />
      {/* <meshStandardMaterial color="orange" /> */}
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalMap={textureNormal}
        normalScale={[0.15, 0.15]}
        roughnessMap={textureRough}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={30} // How much blur mixes with surface roughness (default = 1)
        mixStrength={80} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0.5} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        debug={0}
        reflectorOffset={0.05} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
      />
    </mesh>
  );
};

export const Electric = props => {
  const { nodes, materials } = useGLTF(wires);
  return (
    <group {...props} dispose={null} scale={[0.2, 0.2, 0.2]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Electric_wires_Wires_0.geometry}
              material={materials.Wires}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export const ForwardArrow = ({ handleWork }) => {
  const { nodes, materials } = useGLTF(Arrow);
  const [colorActive, setColorActive] = useState(false);
  const { camera } = useThree();
  const tl = gsap.timeline();

  const selectMovement = () => {
    tl.to(camera.position, {
      duration: 1.5,
      ease: "power2.inOut",
      x: 5,
      z: 1,
      onUpdate: () => {
        camera.lookAt(0, 0, 0);
      },
    });
  };

  return (
    <group
      dispose={null}
      onClick={() => {
        setColorActive(true);
      }}
    >
      <group
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.3, 0.3, 0.3]}
        position={[0, 0.5, 3]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.74, 0, 0]}>
            <mesh geometry={nodes.b0b0b0.geometry}>
              <meshPhysicalMaterial
                color="#efefef"
                transmission={3}
                roughness={0}
                thickness={100}
                envMapIntensity={0}
              />
            </mesh>
          </group>
          <mesh geometry={nodes.b0b0b0_1.geometry}>
            <meshPhysicalMaterial
              color="#efefef"
              transmission={3}
              roughness={0}
              thickness={100}
              envMapIntensity={0}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
};
export const NextArrow = ({ handleContact }) => {
  const { nodes, materials } = useGLTF(Arrow);
  const [colorActive, setColorActive] = useState(false);
  const { camera } = useThree();
  const tl = gsap.timeline();
  return (
    <group
      dispose={null}
      onClick={() => {
        handleContact();
        tl.to(camera.position, {
          duration: 1.5,
          ease: "power2.inOut",
          x: 5,
          z: -2,
          y: 2,
          onUpdate: () => {
            camera.lookAt(0, 0, 0);
          },
        });
      }}
    >
      <group
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.3, 0.3, 0.3]}
        position={[0, 0, 2.5]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.74, 0, 0]}>
            <mesh geometry={nodes.b0b0b0.geometry}>
              <meshStandardMaterial color="red" />
            </mesh>
          </group>
          <mesh geometry={nodes.b0b0b0_1.geometry} material={materials.b0b0b0}>
            <meshStandardMaterial color="red" />
          </mesh>
        </group>
      </group>
    </group>
  );
};
export const PrevArrow = ({ handleAbout }) => {
  const { nodes, materials } = useGLTF(Arrow);
  const [colorActive, setColorActive] = useState(false);
  const { camera } = useThree();
  const tl = gsap.timeline();
  return (
    <group
      dispose={null}
      onClick={() => {
        handleAbout();
        tl.to(camera.position, {
          duration: 1.5,
          ease: "power2.inOut",
          x: 0,
          z: 6,
          y: 2,
          onUpdate: () => {
            camera.lookAt(0, 0, 0);
          },
        });
      }}
    >
      <group
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.3, 0.3, 0.3]}
        position={[0, 1, 2.5]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.74, 0, 0]}>
            <mesh geometry={nodes.b0b0b0.geometry}>
              <meshStandardMaterial color="blue" />
            </mesh>
          </group>
          <mesh geometry={nodes.b0b0b0_1.geometry}>
            <meshStandardMaterial color="blue" />
          </mesh>
        </group>
      </group>
    </group>
  );
};
export const Floor = () => {
  const [ref] = usePlane(() => ({
    mass: 0,
    type: "Static",
    position: [0, 0, 0],
    rotation: [-Math.PI * 0.5, 0, 0],
    args: [100, 100],
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} receiveShadow />
      <meshStandardMaterial color="white" attach={"material"} />
    </mesh>
  );
};
export const Dog = props => {
  const { nodes, materials } = useGLTF(Doggo);
  return (
    <group
      {...props}
      dispose={null}
      scale={[0.03, 0.03, 0.03]}
      rotation={[0, Math.PI, 0]}
      position={[0, 0, -2]}
      castShadow
      receiveShadow
    >
      <group rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Scene_-_Root"]}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["Scene_-_Root"]}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Scene_-_Root"]}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["Scene_-_Root"]}
        ></mesh>
      </group>
    </group>
  );
};
export const Projects = ({ handleWork }) => {
  const { nodes, materials } = useGLTF(ProjectModel);
  const [ref] = useCompoundBody(() => ({
    mass: 0,
    shapes: [{ type: "Box", position: [2, 0.6, 0.7], args: [1, 1.3, 0.5] }],
  }));
  return (
    <group dispose={null} ref={ref} castShadow receiveShadow>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Cube__0.geometry}
        material={materials["Scene_-_Root"]}
        position={[1.5, 0.6, 0.5]}
        rotation={[0, 0.79, -Math.PI / 2]}
        scale={0.01}
      />
    </group>
  );
};
export const King = props => {
  const { nodes, materials } = useGLTF(Kingo);
  const [ref] = useCompoundBody(() => ({
    mass: 0.1,
    position: [-1.2, 0, 0.8],
    shapes: [{ type: "Box", args: [0.5, 1.5, 0.3] }],
  }));
  return (
    <group
      {...props}
      dispose={null}
      scale={[0.0002, 0.0002, 0.0002]}
      ref={ref}
      castShadow
      receiveShadow
    >
      <group rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.wire_225198087}
        >
          {/* <meshStandardMaterial color="white" /> */}
        </mesh>
      </group>
    </group>
  );
};
export const Robot = props => {
  const { nodes, materials } = useGLTF(ROBOTHEAD);
  const [ref] = useCompoundBody(() => ({
    mass: 0,
    ...props,
    shapes: [{ type: "Box", position: [0, 1, 0.5], args: [2, 3, 3] }],
  }));
  return (
    <group {...props} dispose={null} ref={ref} castShadow receiveShadow>
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.2, -0.25]}
        scale={[2, 2, 2]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[0, 0, Math.PI / 2]} scale={[0.16, 0.02, 0.16]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials["Material.010"]}
            ></mesh>
          </group>

          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials["Material.007"]}
          ></mesh>
          <group scale={[0.85, 1, 1]} receiveShadow castShadow>
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials["Material.024"]}
            ></mesh>
          </group>
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials["Material.011"]}
          ></mesh>
          <mesh
            geometry={nodes.Object_11.geometry}
            material={materials["Material.034"]}
          ></mesh>
          <group scale={[1.17, 1.29, 1]}>
            <mesh
              geometry={nodes.Object_13.geometry}
              material={materials["Material.030"]}
            ></mesh>
          </group>
          <group rotation={[0.12, -0.01, -0.01]} scale={[0.58, 0.58, 1.01]}>
            <mesh
              geometry={nodes.Object_15.geometry}
              material={materials["Material.001"]}
            ></mesh>
            <mesh
              geometry={nodes.Object_16.geometry}
              material={materials["Material.033"]}
            ></mesh>
          </group>
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials["Material.031"]}
          >
            <meshToonMaterial emissive="white" />
          </mesh>
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials["Material.029"]}
          ></mesh>
          <mesh
            geometry={nodes.Object_22.geometry}
            material={materials["Material.028"]}
          ></mesh>
        </group>
      </group>
      <group>
        <mesh position={[0, 0.1, 0.5]}>
          <boxGeometry args={[1, 0.2, 1]} />
        </mesh>
      </group>
    </group>
  );
};
export const Gravity = props => {
  const { nodes, materials } = useGLTF(Figure);

  const engineRef = useRef(null);
  const ringsRef = useRef(null);
  useFrame((state, delta) => (engineRef.current.rotation.y -= 0.001));
  useFrame((state, delta) => (ringsRef.current.rotation.y += 0.01));
  return (
    <group {...props} dispose={null}>
      <group rotation={[-0.03, 0, 0]}>
        <mesh
          material-color={"#ffffff"}
          geometry={nodes.Torus001_1.geometry}
          material={materials.Ion}
          ref={ringsRef}
        />
        <mesh
          material-color={"#ffffff"}
          geometry={nodes.Torus001_2.geometry}
          material={materials.glow}
          ref={engineRef}
          position={[0, 0.1, 0]}
        />
      </group>
    </group>
  );
};

export const Bullet = ({ positions }) => {
  const { nodes, materials } = useGLTF(BulletRouge);
  return (
    <group
      dispose={null}
      scale={[0.05, 0.05, 0.05]}
      rotation={[2, 1, 0]}
      position={positions}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["Scene_-_Root"]}
          />
        </group>
      </group>
    </group>
  );
};

// Divisions

export const StreetSign = props => {
  const { nodes, materials } = useGLTF(Street);
  return (
    <group
      {...props}
      dispose={null}
      scale={[0.007, 0.007, 0.007]}
      position={[2, -2, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 0]}>
          <mesh
            geometry={nodes.Object_3.geometry}
            material={materials["Scene_-_Root"]}
          />
        </group>
      </group>
    </group>
  );
};

export const TrashCan = props => {
  const { nodes, materials } = useGLTF(Trash);
  return (
    <group
      {...props}
      dispose={null}
      scale={[1.5, 1.5, 1.5]}
      position={[3, -2, -2]}
    >
      <group position={[-0.01, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[244.94, 62.85, -165.57]}
            rotation={[-Math.PI / 2, 0, -2.46]}
          >
            <group
              position={[172.45, 60.75, -9.67]}
              rotation={[-1.4, 0, 0]}
              scale={100}
            >
              <mesh
                geometry={nodes.trash_can_finish1_trash_can_mat_0.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[172.39, 121.8, -58.18]}
              rotation={[-1.56, 0, 0]}
              scale={100}
            >
              <mesh
                geometry={nodes.cap1_trash_can_mat_0.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[132.97, 4.69, 16.99]}
              rotation={[-1.4, 0, -1.29]}
              scale={100}
            >
              <mesh
                geometry={nodes.wheel_8_trash_can_mat_0.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[132.92, 17.02, -52.9]}
              rotation={[-1.4, 0, 0.56]}
              scale={100}
            >
              <mesh
                geometry={nodes.wheel_7_trash_can_mat_0.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[211.41, 4.79, 16.41]}
              rotation={[-1.4, 0, 1.75]}
              scale={100}
            >
              <mesh
                geometry={nodes.wheel_6_trash_can_mat_0.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[211.41, 17.09, -53.32]}
              rotation={[-1.4, 0, 2.18]}
              scale={100}
            >
              <mesh
                geometry={nodes.wheel_5_trash_can_mat_0.geometry}
                material={materials.trash_can_mat}
              />
            </group>
          </group>
          <group position={[-0.25, 0, 0.47]} rotation={[0, 0.12, 0]}>
            <group
              position={[3.73, 70.1, 0.19]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <mesh
                geometry={nodes.trash_can_finish_trash_can_mat_0.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[3.67, 121.8, -58.18]}
              rotation={[-0.03, 0, 0]}
              scale={100}
            >
              <mesh
                geometry={nodes.cap_trash_can_mat_0.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[-35.22, 19.52, 35.6]}
              rotation={[-Math.PI / 2, 0, 1.92]}
              scale={100}
            >
              <mesh
                geometry={nodes.wheel_1_trash_can_mat_0.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[-35.22, 19.52, -35.21]}
              rotation={[-Math.PI / 2, 0, -2.44]}
              scale={100}
            >
              <mesh
                geometry={nodes.wheel_3_trash_can_mat_0.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[42.68, 19.52, 35.6]}
              rotation={[-Math.PI / 2, 0, 1.75]}
              scale={100}
            >
              <mesh
                geometry={nodes.wheel_2_trash_can_mat_0.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[42.68, 19.52, -35.21]}
              rotation={[-Math.PI / 2, 0, 2.18]}
              scale={100}
            >
              <mesh
                geometry={nodes.wheel_4_trash_can_mat_0.geometry}
                material={materials.trash_can_mat}
              />
            </group>
          </group>
          <group position={[-148.18, 0, 47.57]} rotation={[0, Math.PI / 3, 0]}>
            <group
              position={[3.73, 70.1, 0.19]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <mesh
                geometry={nodes.trash_can_finish_trash_can_mat_0_1.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[3.67, 121.8, -58.18]}
              rotation={[1.77, 0, 0]}
              scale={100}
            >
              <mesh
                geometry={nodes.cap_trash_can_mat_0_1.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[-35.22, 19.52, 35.6]}
              rotation={[-Math.PI / 2, 0, 1.92]}
              scale={100}
            >
              <mesh
                geometry={nodes.wheel_1_trash_can_mat_0_1.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[-35.22, 19.52, -35.21]}
              rotation={[-Math.PI / 2, 0, -2.44]}
              scale={100}
            >
              <mesh
                geometry={nodes.wheel_3_trash_can_mat_0_1.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[42.68, 19.52, 35.6]}
              rotation={[-Math.PI / 2, 0, 1.75]}
              scale={100}
            >
              <mesh
                geometry={nodes.wheel_2_trash_can_mat_0_1.geometry}
                material={materials.trash_can_mat}
              />
            </group>
            <group
              position={[42.68, 19.52, -35.21]}
              rotation={[-Math.PI / 2, 0, 2.18]}
              scale={100}
            >
              <mesh
                geometry={nodes.wheel_4_trash_can_mat_0_1.geometry}
                material={materials.trash_can_mat}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};
export const Taxi = props => {
  const { nodes, materials } = useGLTF(Mondeo);
  return (
    <group
      {...props}
      dispose={null}
      scale={[0.05, 0.05, 0.05]}
      position={[10, -0.7, -7]}
      rotation={[0, -1.5, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.wire_006134006}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.wire_027177027}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.wire_087224198}
        />
      </group>
    </group>
  );
};

export const FireHydrant = props => {
  const { nodes, materials } = useGLTF(Fire);
  return (
    <group
      {...props}
      dispose={null}
      scale={[3, 3, 3]}
      position={[3.5, -1.5, -0.5]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.47}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.TD_Checker}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.TD_Checker}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.TD_Checker}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.TD_Checker}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.TD_Checker}
        />
      </group>
    </group>
  );
};

export const Mailbox = props => {
  const { nodes, materials } = useGLTF(Mail);
  return (
    <group
      {...props}
      dispose={null}
      scale={[0.02, 0.02, 0.02]}
      position={[-5, -2, 0]}
      rotation={[0, -1.2, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={0.73}>
            <mesh
              geometry={nodes.Cube_DefaultMaterial_0.geometry}
              material={materials.DefaultMaterial}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export const RobotDivision = props => {
  const { nodes, materials } = useGLTF(ROBOTHEAD);

  return (
    <group {...props} dispose={null} castShadow receiveShadow>
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -7, -24]}
        scale={[20, 20, 20]}
      >
        <group rotation={[Math.PI / 2, 0.1, 0]}>
          <group rotation={[0, 0, Math.PI / 2]} scale={[0.16, 0.02, 0.16]}>
            {/* hears */}
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials["Material.010"]}
            >
              <meshStandardMaterial color={"#426bfc"} />
            </mesh>
          </group>

          {/* head */}
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials["Material.007"]}
          >
            <meshStandardMaterial color={"#426bfc"} />
          </mesh>
          <group scale={[0.85, 1, 1]} receiveShadow castShadow>
            {/* nose */}
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials["Material.024"]}
            >
              <meshStandardMaterial color={"#426bfc"} />
            </mesh>
          </group>
          {/* mask */}
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials["Material.011"]}
          >
            <meshStandardMaterial color={"#426bfc"} />
          </mesh>
          {/* chin */}
          <mesh
            geometry={nodes.Object_11.geometry}
            material={materials["Material.034"]}
          >
            <meshStandardMaterial color={"#426bfc"} />
          </mesh>
          <group scale={[1.17, 1.29, 1]}>
            {/* glasses */}
            <mesh
              geometry={nodes.Object_13.geometry}
              material={materials["Material.030"]}
            >
              <meshStandardMaterial color={"#426bfc"} />
            </mesh>
          </group>
          <group rotation={[0.12, -0.01, -0.01]} scale={[0.58, 0.58, 1.01]}>
            <mesh
              geometry={nodes.Object_15.geometry}
              material={materials["Material.001"]}
            >
              <meshStandardMaterial color={"#426bfc"} />
            </mesh>
            <mesh
              geometry={nodes.Object_16.geometry}
              material={materials["Material.033"]}
            >
              <meshStandardMaterial color={"#426bfc"} />
            </mesh>
          </group>
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials["Material.031"]}
          >
            <meshToonMaterial emissive="#426bfc=" />
          </mesh>
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials["Material.029"]}
          >
            <meshStandardMaterial color={"#426bfc"} />
          </mesh>
          <mesh
            geometry={nodes.Object_22.geometry}
            material={materials["Material.028"]}
          >
            <meshStandardMaterial color={"#426bfc"} />
          </mesh>
        </group>
      </group>
      <group></group>
    </group>
  );
};
