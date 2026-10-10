import { Color } from "../Basic Types/Color"
import { Quaternion } from "../Basic Types/Quaternion";
import { Vector3 } from "../Basic Types/Vector3";
import { entity_Data } from "../Entity/Entity_Data";
import { registerStart } from "../RegisterStart";
import { DefaultShaders } from "../Shader/DefaultShaders"
import { spawnPrimitive } from "../SpawnPrimitive";
import { ParticlesProperties } from "./Particles";


export const DefaultParticles = {
  getColoredWaterFountainParticlesProperties,
  getRainbowCubeParticlesProperties,
  getHeartParticlesProperties,
  getSmokeParticlesProperties,
  getExplosionParticlesProperties,
  getMagicFloatingParticlesProperties,
  getRainParticlesProperties,
  getRainSplashParticlesProperties,
}


const basicSphere = spawnPrimitive.sphere(12, 6, new Vector3(0, -100, 0), 1, Quaternion.one, Color.white, 1, 'None', 'Empty', undefined);
basicSphere.visible.set(false);

registerStart(start);
function start() {
  entity_Data.defaultParticlesProperties.meshID = basicSphere.nodeID ?? -1;
}


const coloredWaterFountainSphere = spawnPrimitive.sphere(12, 6, new Vector3(0, -100, 0), 1, Quaternion.one, Color.white, 1, 'None', 'Empty', undefined);
coloredWaterFountainSphere.visible.set(false);

function getColoredWaterFountainParticlesProperties(color: Color): ParticlesProperties {
  coloredWaterFountainSphere.mesh.color.set(color, 1);

  return {
    meshID: coloredWaterFountainSphere.nodeID ?? -1,
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
    speedScale: 1,
    scaleMin: 0,
    scaleMax: 0.04,

    initialVelocityMin: 0.5,
    initialVelocityMax: 1.75,
    rotationVelocityMin: undefined,
    rotationVelocityMax: undefined,
    gravity: Vector3.moonGravity,
    direction: Vector3.up,
    spread: 2,
    tangentialAccelMin: 0,
    tangentialAccelMax: 0,
    turbulence: {
      noiseStrength: undefined,
      noiseScale: undefined,
      noiseSpeed: undefined,
      noiseSpeedRandom: undefined,
    },

    transformAlign: 'Disabled',
  }
}


const rainbowCube = spawnPrimitive.cube(new Vector3(0, -100, 0), Vector3.one, Quaternion.one, Color.white, 1, false, 'Empty', undefined);
rainbowCube.visible.set(false);

function getRainbowCubeParticlesProperties(durationSeconds: number, saturation: number, value: number): ParticlesProperties {
  rainbowCube.mesh.shader.set(DefaultShaders.getRainbowShader(durationSeconds, saturation, value, 0.5, 0.5));
  // Instead of creating a new shader, it could update the shader properties.

  return {
    meshID: rainbowCube.nodeID ?? -1,
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
    speedScale: 1,
    scaleMin: 0,
    scaleMax: 0.075,

    initialVelocityMin: 0,
    initialVelocityMax: 0.1,
    rotationVelocityMin: undefined,
    rotationVelocityMax: undefined,
    gravity: new Vector3(0, -0.02, 0),
    direction: Vector3.up,
    spread: 90,
    tangentialAccelMin: 0,
    tangentialAccelMax: 0,
    turbulence: {
      noiseStrength: undefined,
      noiseScale: undefined,
      noiseSpeed: undefined,
      noiseSpeedRandom: undefined,
    },

    transformAlign: 'Disabled',
  }
}


const heartSphere = spawnPrimitive.sphere(12, 6, new Vector3(0, -100, 0), 1, Quaternion.one, Color.white, 1, 'None', 'Empty', undefined);
heartSphere.mesh.shader.set(DefaultShaders.getHeartShader());
heartSphere.visible.set(false);

function getHeartParticlesProperties(): ParticlesProperties {
  return {
    meshID: heartSphere.nodeID ?? -1,
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
    speedScale: 1,
    scaleMin: 0,
    scaleMax: 0.25,

    initialVelocityMin: 0.25,
    initialVelocityMax: .75,
    rotationVelocityMin: undefined,
    rotationVelocityMax: undefined,
    gravity: Vector3.moonGravity,
    direction: Vector3.up,
    spread: 4,
    tangentialAccelMin: 0,
    tangentialAccelMax: 0,
    turbulence: {
      noiseStrength: undefined,
      noiseScale: undefined,
      noiseSpeed: undefined,
      noiseSpeedRandom: undefined,
    },

    transformAlign: 'Billboard',
  }
}


const smokeSphere = spawnPrimitive.sphere(12, 6, new Vector3(0, -100, 0), 1, Quaternion.one, Color.white, 1, 'None', 'Empty', undefined);
smokeSphere.visible.set(false);

function getSmokeParticlesProperties(color: Color | undefined): ParticlesProperties {
  smokeSphere.mesh.color.set(color ?? new Color(0.4, 0.4, 0.35), 0.5);

  return {
    meshID: smokeSphere.nodeID ?? -1,
    emissionShape: 'Sphere',
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
    explosiveness: 0.0,
    randomness: 0.6,

    amount: 25,
    lifetimeInSeconds: 3.0,
    speedScale: 0.8,
    scaleMin: 0.6,
    scaleMax: 1,

    initialVelocityMin: 0.25,
    initialVelocityMax: 1,
    rotationVelocityMin: undefined,
    rotationVelocityMax: undefined,
    gravity: new Vector3(0, 0.15, 0),
    direction: Vector3.up,
    spread: 25,
    tangentialAccelMin: 0,
    tangentialAccelMax: 0,
    turbulence: {
      noiseStrength: undefined,
      noiseScale: undefined,
      noiseSpeed: undefined,
      noiseSpeedRandom: undefined,
    },

    transformAlign: 'Billboard',
  }
}


const explosionParticlesSphere = spawnPrimitive.sphere(12, 6, new Vector3(0, -100, 0), 1, Quaternion.one, Color.white, 1, 'None', 'Empty', undefined);
explosionParticlesSphere.visible.set(false);

function getExplosionParticlesProperties(color: Color): ParticlesProperties {
  explosionParticlesSphere.mesh.shader.set(DefaultShaders.getColorShader(color, 0.7, 0.8));

  return {
    meshID: explosionParticlesSphere.nodeID ?? -1,
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
    isOneShot: true,
    explosiveness: 1.0,
    randomness: 0.4,

    amount: 30,
    lifetimeInSeconds: 1,
    speedScale: 2.5,
    scaleMin: 0.08,
    scaleMax: 0.3,

    initialVelocityMin: 0.25,
    initialVelocityMax: 1,
    rotationVelocityMin: undefined,
    rotationVelocityMax: undefined,
    gravity: new Vector3(0, -9.81, 0),
    direction: Vector3.up,
    spread: 45,
    tangentialAccelMin: 0,
    tangentialAccelMax: 0,
    turbulence: {
      noiseStrength: undefined,
      noiseScale: undefined,
      noiseSpeed: undefined,
      noiseSpeedRandom: undefined,
    },

    transformAlign: 'Disabled',
  }
}


const magicFloatingSphere = spawnPrimitive.sphere(12, 6, new Vector3(0, -100, 0), 1, Quaternion.one, Color.white, 1, 'None', 'Empty', undefined);
magicFloatingSphere.visible.set(false);

function getMagicFloatingParticlesProperties(durationSeconds: number, saturation: number, value: number): ParticlesProperties {
  magicFloatingSphere.mesh.shader.set(DefaultShaders.getRainbowShader(durationSeconds, saturation, value, 0.5, 0.5));

  return {
    meshID: magicFloatingSphere.nodeID ?? -1,
    emissionShape: 'Ring',
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
    explosiveness: 0.0,
    randomness: 0.5,

    amount: 30,
    lifetimeInSeconds: 1.4,
    speedScale: 0.8,
    scaleMin: 0.05,
    scaleMax: 0.2,

    initialVelocityMin: 0.25,
    initialVelocityMax: 2,
    rotationVelocityMin: undefined,
    rotationVelocityMax: undefined,
    gravity: new Vector3(0, 0.1, 0),
    direction: Vector3.up,
    spread: 15,
    tangentialAccelMin: 0,
    tangentialAccelMax: 0,
    turbulence: {
      noiseStrength: undefined,
      noiseScale: undefined,
      noiseSpeed: undefined,
      noiseSpeedRandom: undefined,
    },

    transformAlign: 'Disabled',
  }
}


const rainParticlesSphere = spawnPrimitive.sphere(12, 6, new Vector3(0, -100, 0), 1, Quaternion.one, Color.white, 1, 'None', 'Empty', undefined);
rainParticlesSphere.visible.set(false);

function getRainParticlesProperties(color: Color | undefined): ParticlesProperties {
  rainParticlesSphere.mesh.color.set(color ?? new Color(0.427, 0.706, 0.969), 0.8);

  return {
    meshID: rainParticlesSphere.nodeID ?? -1,
    emissionShape: 'Box',
    emissionShapeProperties: {
      sphereRadius: 0.1,
      boxExtents: new Vector3(3, 0.25, 3),
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
    explosiveness: 0.0,
    randomness: 0.45,

    amount: 150,
    lifetimeInSeconds: 4,
    speedScale: 1,
    scaleMin: 0.03,
    scaleMax: 0.06,

    initialVelocityMin: 0.25,
    initialVelocityMax: 2,
    rotationVelocityMin: undefined,
    rotationVelocityMax: undefined,
    gravity: new Vector3(0, -25.0, 0),
    direction: Vector3.down,
    spread: 2,
    tangentialAccelMin: 0,
    tangentialAccelMax: 0,
    turbulence: {
      noiseStrength: undefined,
      noiseScale: undefined,
      noiseSpeed: undefined,
      noiseSpeedRandom: undefined,
    },

    transformAlign: 'AlignToVelocity',
    // mesh sphere's radius: 0.1, height: 1
  }
}


const rainSplashParticlesSphere = spawnPrimitive.sphere(12, 6, new Vector3(0, -100, 0), 1, Quaternion.one, Color.white, 1, 'None', 'Empty', undefined);
rainSplashParticlesSphere.visible.set(false);

function getRainSplashParticlesProperties(color: Color | undefined): ParticlesProperties {
  rainSplashParticlesSphere.mesh.color.set(color ?? new Color(0.427, 0.706, 0.969), 0.8);
  
  return {
    meshID: rainSplashParticlesSphere.nodeID ?? -1,
    emissionShape: 'Point',
    emissionShapeProperties: {
      sphereRadius: undefined,
      boxExtents: new Vector3(3, 0.25, 3),
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
    explosiveness: 0.8,
    randomness: 1,

    amount: 4,
    lifetimeInSeconds: 1,
    speedScale: 1,
    scaleMin: 0.08,
    scaleMax: 0.1,

    initialVelocityMin: 0.25,
    initialVelocityMax: 6,
    rotationVelocityMin: undefined,
    rotationVelocityMax: undefined,
    gravity: new Vector3(0, -9.81, 0),
    direction: Vector3.up,
    spread: 45,
    tangentialAccelMin: 0,
    tangentialAccelMax: 0,
    turbulence: {
      noiseStrength: undefined,
      noiseScale: undefined,
      noiseSpeed: undefined,
      noiseSpeedRandom: undefined,
    },

    transformAlign: 'Disabled',
  }
}