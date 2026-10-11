import { Color } from "./Yuu API/Basic Types/Color";
import { Quaternion } from "./Yuu API/Basic Types/Quaternion";
import { Vector3 } from "./Yuu API/Basic Types/Vector3";
import { inWorldConsole } from "./Yuu API/Console";
import { Entity } from "./Yuu API/Entity/Entity";
import { DefaultParticles } from "./Yuu API/Particles/DefaultParticles";
import { GetParticlesProperties } from "./Yuu API/Particles/GetParticlesProperties";
import { PlayParticles } from "./Yuu API/Particles/PlayParticles";
import { registerStart } from "./Yuu API/RegisterStart";
import { spawnPrimitive } from "./Yuu API/SpawnPrimitive";

registerStart(start);
function start() {


    const particles = new Entity(Vector3.up, Quaternion.one, Vector3.one, undefined, 'Empty');
    particles.particles.initialize();

    const particleMesh = spawnPrimitive.cube(
        new Vector3(0, 1, 0),
        new Vector3(1, 1, 1),
        Quaternion.one,
        Color.white,
        1,
        false,
        'Empty',
        undefined

    );
    particleMesh.visible.set(false);


    particles.particles.setParticlesProperties({ meshID: particleMesh.nodeID });
    particles.particles.setParticlesProperties({ amount: 100, spread: 90});


    particles.particles.play();

    inWorldConsole.visible(true, Vector3.one);
    console.log('amount:' + GetParticlesProperties.amount(particles));
    console.log('spread:' + GetParticlesProperties.spread(particles));
}