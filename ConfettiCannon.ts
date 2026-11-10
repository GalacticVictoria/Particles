import { Vector3 } from './Yuu API/Basic Types/Vector3';
import { Color } from './Yuu API/Basic Types/Color';
import { Quaternion } from './Yuu API/Basic Types/Quaternion';
import { ParticlesProperties } from './Yuu API/Particles/Particles';
import { spawnPrimitive } from './Yuu API/SpawnPrimitive';



export const MyParticles = {
  getConfettiParticlesProperties
};

const confettiPlane = spawnPrimitive.plane("Back", Vector3.zero, Vector3.one, Quaternion.one, Color.white, 1, "None", "Empty", undefined);

function getConfettiParticlesProperties(color: Color): Partial<ParticlesProperties> {
  confettiPlane.mesh.color.set(color, 1);

  return {
    meshNodeID: confettiPlane.mesh.nodeID ?? -1,

    isEmitting: true,
    isOneShot: false,
    randomness: 0.5,

    amount: 48,
    lifetimeInSeconds: 3,
    speedScale: 1,
    scaleMin: 0,
    scaleMax: 0.04,

    initialVelocityMin: 0.5,
    initialVelocityMax: 1.75,
    gravity: Vector3.moonGravity,
    spread: 2,
  }
}
