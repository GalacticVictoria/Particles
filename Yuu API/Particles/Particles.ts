import { Vector3 } from "../Basic Types/Vector3";


// Edit this type definition to have explanations like the d.ts
export type ParticlesProperties = {
  meshID: number,
  emissionShape: ParticlesEmissionShape,
  emissionShapeProperties: {
    sphereRadius: number | undefined,
    boxExtents: Vector3 | undefined,
    ring: {
      axis: Vector3 | undefined,
      height: number | undefined,
      radius: number | undefined,
      innerRadius: number | undefined,
      coneAngle: number | undefined,
    },
  },

  isEmitting: boolean,
  isOneShot: boolean,
  explosiveness: number,
  randomness: number,

  amount: number,
  lifetimeInSeconds: number,
  speedScale: number,
  scaleMin: number,
  scaleMax: number,

  initialVelocityMin: number,
  initialVelocityMax: number,
  rotationVelocityMin: Vector3 | undefined,
  rotationVelocityMax: Vector3 | undefined,

  gravity: Vector3,
  direction: Vector3,
  spread: number,
  tangentialAccelMin: number,
  tangentialAccelMax: number,
  turbulence: {
    noiseStrength: number | undefined,
    noiseScale: number | undefined,
    noiseSpeed: Vector3 | undefined,
    noiseSpeedRandom: number | undefined,
  }

  transformAlign: ParticlesTransformAlignment,
}
