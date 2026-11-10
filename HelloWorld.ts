import { registerStart } from "./Yuu API/RegisterStart";
import { inWorldConsole } from "./Yuu API/Console";
import { Vector3 } from "./Yuu API/Basic Types/Vector3";
import { PlayParticles } from "./Yuu API/Particles/PlayParticles";
import { Color } from "./Yuu API/Basic Types/Color";
import { MyParticles } from "./ConfettiCannon";
import { GetParticlesProperties } from "./Yuu API/Particles/GetParticlesProperties";

//registerStart(start);
//function start() {
    inWorldConsole.visible(true, new Vector3(0, 1.5, -3.5));

    
    PlayParticles.atPos(Vector3.up, MyParticles.getConfettiParticlesProperties(Color.randomHue()));
    PlayParticles.atPos(Vector3.up, MyParticles.getConfettiParticlesProperties(Color.randomHue()));
    PlayParticles.atPos(Vector3.up, MyParticles.getConfettiParticlesProperties(Color.randomHue()));
    PlayParticles.atPos(Vector3.up, MyParticles.getConfettiParticlesProperties(Color.randomHue()));
    PlayParticles.atPos(Vector3.up, MyParticles.getConfettiParticlesProperties(Color.randomHue()));
    PlayParticles.atPos(Vector3.up, MyParticles.getConfettiParticlesProperties(Color.randomHue()));
    
}