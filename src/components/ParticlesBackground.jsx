import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
            fullScreen: { enable: false },
            background: { color: { value: "#0f172a" } },
            particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 0.6 },
            links: { enable: true, distance: 120, color: "#ffffff", opacity: 0.2 },
            color: { value: "#ffffff" },
            },
            interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 80 } },
            },
        }}
        style={{
            position: "absolute",
            zIndex: -1,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
        }}
    />
  );
};

export default ParticlesBackground;
