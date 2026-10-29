import { registerStart } from "./Yuu API/RegisterStart";
import { inWorldConsole } from "./Yuu API/Console";
import { Vector3 } from "./Yuu API/Basic Types/Vector3";
import { PlayParticles } from "./Yuu API/Particles/PlayParticles";
import { DefaultParticles } from "./Yuu API/Particles/DefaultParticles";

registerStart(start);
function start() {
    inWorldConsole.visible(true, new Vector3(0, 1.5, -3.5));

    console.log('Yooo!!!');

    PlayParticles.atPos(Vector3.up, DefaultParticles.getHeartParticlesProperties());
    
}