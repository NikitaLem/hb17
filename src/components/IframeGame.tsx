import React from "react";

const IframeGame: React.FC = () => (
  <iframe
    src="https://nikitalem.github.io/pixi-floppy-bird/"
    title="Floppy Bird Game"
    width="1088"
    height="616"
    style={{ border: "none" }}
    allowFullScreen
    autoFocus
  />
);

export default IframeGame;
