import React from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
const Confetti = () => {
  return (
    <>
      <Fireworks autorun={{ speed: 0.5 }} width={100} height={100} />
    </>
  );
};

export default Confetti;
