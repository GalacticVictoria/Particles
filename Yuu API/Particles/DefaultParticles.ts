import { Color } from "../Basic Types/Color"
import { Quaternion } from "../Basic Types/Quaternion";
import { Vector3 } from "../Basic Types/Vector3";
import { Entity } from "../Entity";
import { DefaultShaders } from "../Shader/DefaultShaders"
import { spawnPrimitive } from "../SpawnPrimitive";


// How to get properties without Godot.

// Edit this type definition to have explanations like the d.ts
export type ParticlesProperties = {
  mesh: Entity,
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
  scaleMin: number,
  scaleMax: number,

  initialVelocityMin: number,
  initialVelocityMax: number,
  gravity: Vector3,
  direction: Vector3,
  spread: number,

  transformAlign: ParticlesTransformAlignment,
}


export const DefaultParticles = {
  getColoredWaterFountainParticlesProperties,
  getRainbowCubeParticlesProperties,
  getHeartParticlesProperties,
}


const coloredWaterFountainSphere = spawnPrimitive.sphere(12, 6, new Vector3(0, -100, 0), 1, Quaternion.one, Color.white, 1, 'None', 'Empty', undefined);
coloredWaterFountainSphere.visible.set(false);

function getColoredWaterFountainParticlesProperties(color: Color): ParticlesProperties {
  coloredWaterFountainSphere.mesh.color.set(color, 1);

  return {
    mesh: coloredWaterFountainSphere,
    emissionShape: 'Point',
    emissionShapeProperties: {
      sphereRadius: undefined,
      boxExtents: undefined,
      ring: {
        axis: undefined,
        height: undefined,
        radius: undefined,
        innerRadius: undefined,
        coneAngle: undefined,
      },
    },

    isEmitting: true,
    isOneShot: false,
    explosiveness: 0,
    randomness: 0.5,

    amount: 48,
    lifetimeInSeconds: 3,
    scaleMin: 0,
    scaleMax: 0.04,

    initialVelocityMin: 0.5,
    initialVelocityMax: 1.75,
    gravity: Vector3.moonGravity,
    direction: Vector3.up,
    spread: 2,

    transformAlign: 'Disabled',
  }
}


const rainbowCube = spawnPrimitive.cube(new Vector3(0, -100, 0), Vector3.one, Quaternion.one, Color.white, 1, false, 'Empty', undefined);
rainbowCube.visible.set(false);

function getRainbowCubeParticlesProperties(durationSeconds: number, saturation: number, value: number): ParticlesProperties {
  rainbowCube.mesh.shader.set(DefaultShaders.getRainbowShader(durationSeconds, saturation, value, 0.5, 0.5));
  // Instead of creating a new shader, it could update the shader properties.

  return {
    mesh: rainbowCube,
    emissionShape: 'Point',
    emissionShapeProperties: {
      sphereRadius: undefined,
      boxExtents: undefined,
      ring: {
        axis: undefined,
        height: undefined,
        radius: undefined,
        innerRadius: undefined,
        coneAngle: undefined,
      },
    },

    isEmitting: true,
    isOneShot: false,
    explosiveness: 0,
    randomness: 0.5,

    amount: 24,
    lifetimeInSeconds: 8,
    scaleMin: 0,
    scaleMax: 0.075,

    initialVelocityMin: 0,
    initialVelocityMax: 0.1,
    gravity: new Vector3(0, -0.02, 0),
    direction: Vector3.up,
    spread: 90,

    transformAlign: 'Disabled',
  }
}

const heartSphere = spawnPrimitive.sphere(12, 6, new Vector3(0, -100, 0), 1, Quaternion.one, Color.white, 1, 'None', 'Empty', undefined);
heartSphere.mesh.shader.set(DefaultShaders.getHeartShader());
coloredWaterFountainSphere.visible.set(false);

function getHeartParticlesProperties(): ParticlesProperties {
  return {
    mesh: heartSphere,
    emissionShape: 'Sphere',
    emissionShapeProperties: {
      sphereRadius: 0.5,
      boxExtents: undefined,
      ring: {
        axis: undefined,
        height: undefined,
        radius: undefined,
        innerRadius: undefined,
        coneAngle: undefined,
      },
    },

    isEmitting: true,
    isOneShot: false,
    explosiveness: 0,
    randomness: 0.5,

    amount: 6,
    lifetimeInSeconds: 3,
    scaleMin: 0,
    scaleMax: 0.25,

    initialVelocityMin: 0.25,
    initialVelocityMax: .75,
    gravity: Vector3.moonGravity,
    direction: Vector3.up,
    spread: 4,

    transformAlign: 'Billboard',
  }
}