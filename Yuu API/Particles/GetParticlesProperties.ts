import { Vector3 } from "../Basic Types/Vector3";
import { Entity } from "../Entity";


export const GetParticlesProperties = {
  emissionShape: {
    shape,
    sphereRadius,
    boxExtents,
    ring: {
      axis: ringAxis,
      height: ringHeight,
      radius: ringRadius,
      innerRadius: ringInnerRadius,
      coneAngle: ringConeAngle,
    },
    isOneShot,
    explosiveness,
    randomness,
    amount,
    lifetimeInSeconds,
    scale: {
      min: minScale,
      max: maxScale,
    },
    initialVelocity: {
      min: minInitialVelocity,
      max: maxInitialVelocity,
    },
    gravity,
    direction,
    spread,
    transformAlign,
  },
}


function shape(particlesEntity: Entity): ParticlesEmissionShape | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.shape.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function sphereRadius(particlesEntity: Entity): number | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.shape.sphere.radius.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function boxExtents(particlesEntity: Entity): Vector3 | undefined {
  if (particlesEntity.particles.nodeID) {
    const payload = Godot.node.particles.shape.box.extents.get(particlesEntity.particles.nodeID);
    return payload ? new Vector3(payload.x, payload.y, payload.z) : undefined;
  }
  else {
    return undefined;
  }
}

function ringAxis(particlesEntity: Entity): Vector3 | undefined {
  if (particlesEntity.particles.nodeID) {
    const payload = Godot.node.particles.shape.ring.axis.get(particlesEntity.particles.nodeID);
    return payload ? new Vector3(payload.x, payload.y, payload.z) : undefined;
  }
  else {
    return undefined;
  }
}

function ringHeight(particlesEntity: Entity): number | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.shape.ring.height.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function ringRadius(particlesEntity: Entity): number | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.shape.ring.radius.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function ringInnerRadius(particlesEntity: Entity): number | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.shape.ring.innerRadius.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function ringConeAngle(particlesEntity: Entity): number | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.shape.ring.coneAngle.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function isOneShot(particlesEntity: Entity): boolean | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.isOneShot.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function explosiveness(particlesEntity: Entity): number | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.explosiveness.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function randomness(particlesEntity: Entity): number | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.randomness.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function amount(particlesEntity: Entity): number | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.amount.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function lifetimeInSeconds(particlesEntity: Entity): number | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.lifetime.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function minScale(particlesEntity: Entity): number | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.scale.min.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function maxScale(particlesEntity: Entity): number | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.scale.max.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function minInitialVelocity(particlesEntity: Entity): number | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.initialVelocity.min.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function maxInitialVelocity(particlesEntity: Entity): number | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.initialVelocity.max.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function gravity(particlesEntity: Entity): Vector3 | undefined {
  if (particlesEntity.particles.nodeID) {
    const payload = Godot.node.particles.gravity.get(particlesEntity.particles.nodeID);
    return payload ? new Vector3(payload.x, payload.y, payload.z) : undefined;
  }
  else {
    return undefined;
  }
}

function direction(particlesEntity: Entity): Vector3 | undefined {
  if (particlesEntity.particles.nodeID) {
    const payload = Godot.node.particles.direction.get(particlesEntity.particles.nodeID);
    return payload ? new Vector3(payload.x, payload.y, payload.z) : undefined;
  }
  else {
    return undefined;
  }
}

function spread(particlesEntity: Entity): number | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.spread.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}

function transformAlign(particlesEntity: Entity): ParticlesTransformAlignment | undefined {
  if (particlesEntity.particles.nodeID) {
    return Godot.node.particles.transformAlign.get(particlesEntity.particles.nodeID);
  }
  else {
    return undefined;
  }
}
