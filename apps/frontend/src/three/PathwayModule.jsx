import * as THREE from 'three';
import { createReactorMaterials } from './materials';

/**
 * PathwayModule
 * Constructs a single interactive isometric block in the Capability Reactor.
 * Used by ArchitectureScene to instantiate the 4 pathway modules (Workshops, CRT, Internships, Projects).
 */
export function createPathwayModuleMesh(moduleData, materials = createReactorMaterials()) {
  const group = new THREE.Group();
  group.name = `pathway-module-${moduleData.id}`;
  group.userData = {
    moduleId: moduleData.id,
    title: moduleData.title,
    href: moduleData.href,
    baseY: 0.25,
    targetY: 0.25,
    isHovered: false,
    isSelected: false,
  };

  const [px, py, pz] = moduleData.position || [0, 0.25, 0];
  group.position.set(px, py, pz);

  // 1. Machined base block (1.28 x 0.36 x 1.28)
  const blockGeo = new THREE.BoxGeometry(1.28, 0.36, 1.28);
  const blockMat = materials.moduleSurface.clone();
  const blockMesh = new THREE.Mesh(blockGeo, blockMat);
  blockMesh.userData = { moduleId: moduleData.id };
  group.add(blockMesh);

  // 2. Top precision socket plate (1.06 x 0.05 x 1.06)
  const socketGeo = new THREE.BoxGeometry(1.06, 0.05, 1.06);
  const socketMat = materials.recessedSocket.clone();
  const socketMesh = new THREE.Mesh(socketGeo, socketMat);
  socketMesh.position.set(0, 0.205, 0);
  socketMesh.userData = { moduleId: moduleData.id };
  group.add(socketMesh);

  // 3. Signal indicator bar on inner edge (0.34 x 0.06 x 0.08)
  const barGeo = new THREE.BoxGeometry(0.38, 0.06, 0.08);
  const barMat = materials.precisionNode.clone();
  const barMesh = new THREE.Mesh(barGeo, barMat);
  barMesh.position.set(0, 0.24, pz > 0 ? -0.42 : 0.42);
  barMesh.userData = { moduleId: moduleData.id };
  group.add(barMesh);

  // 4. Hairline edge wireframe
  const edgesGeo = new THREE.EdgesGeometry(blockGeo);
  const edgeMat = new THREE.LineBasicMaterial({
    color: 0x3659D9,
    transparent: true,
    opacity: 0.38,
  });
  const edgeLines = new THREE.LineSegments(edgesGeo, edgeMat);
  group.add(edgeLines);

  group.userData.refs = {
    blockMat,
    barMat,
    edgeMat,
  };

  return group;
}

export default createPathwayModuleMesh;
