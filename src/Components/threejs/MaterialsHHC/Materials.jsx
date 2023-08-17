import { MeshTransmissionMaterial } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

export class Materials {
  constructor() {}

  standard(config) {
    return <meshStandardMaterial {...config} />;
  }

  standard2(config) {
    return new THREE.MeshStandardMaterial(config);
  }

  glass(config) {
    return <MeshTransmissionMaterial {...config} />;
  }

  basic() {
    return new THREE.MeshBasicMaterial();
  }
}
