import * as THREE from 'three';
import { tokens } from '../theme/masterThemeConfig';

export function createReactorMaterials() {
  return {
    substrateBase: new THREE.MeshStandardMaterial({
      color: new THREE.Color(tokens.color.midnight),
      roughness: 0.48,
      metalness: 0.35,
    }),
    recessedSocket: new THREE.MeshStandardMaterial({
      color: new THREE.Color('#0E1525'),
      roughness: 0.42,
      metalness: 0.4,
    }),
    moduleSurface: new THREE.MeshStandardMaterial({
      color: new THREE.Color(tokens.color.midnight2),
      roughness: 0.32,
      metalness: 0.28,
    }),
    precisionNode: new THREE.MeshStandardMaterial({
      color: new THREE.Color(tokens.color.precision),
      emissive: new THREE.Color(tokens.color.precision),
      emissiveIntensity: 0.25,
      roughness: 0.25,
      metalness: 0.35,
    }),
    electricSignal: new THREE.MeshStandardMaterial({
      color: new THREE.Color(tokens.color.electric),
      emissive: new THREE.Color(tokens.color.electric),
      emissiveIntensity: 0.45,
      roughness: 0.2,
      metalness: 0.2,
    }),
    translucentPrism: new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(tokens.color.precision),
      emissive: new THREE.Color(tokens.color.precision),
      emissiveIntensity: 0.28,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.45,
      transparent: true,
      opacity: 0.88,
    }),
  };
}

export const createArchitecturalMaterials = createReactorMaterials;

export function disposeReactorMaterials(materials) {
  if (!materials) return;
  Object.values(materials).forEach((mat) => {
    if (mat && typeof mat.dispose === 'function') {
      mat.dispose();
    }
  });
}

export const disposeMaterialSet = disposeReactorMaterials;
