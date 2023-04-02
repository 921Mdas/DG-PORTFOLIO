import { useMemo } from "react";
import * as THREE from "three";

const useCull = meshes => {
  const frustum = useMemo(() => new THREE.Frustum(), []);
  const camera = useMemo(() => new THREE.PerspectiveCamera(), []);

  const visibleMeshes = useMemo(() => {
    const localFrustum = frustum.setFromProjectionMatrix(
      camera.projectionMatrix.clone().multiply(camera.matrixWorldInverse)
    );

    return meshes?.filter(mesh => {
      mesh.updateMatrixWorld();
      return localFrustum.intersectsBox(
        mesh.geometry.boundingBox.clone().applyMatrix4(mesh.matrixWorld)
      );
    });
  }, [meshes, frustum, camera]);

  return visibleMeshes;
};

export default useCull;
