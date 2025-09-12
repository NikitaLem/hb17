import React, { useState, type ReactNode } from "react";

interface SpoilerProps {
  children: ReactNode;
}

const Spoiler: React.FC<SpoilerProps> = ({ children }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <span
      onClick={() => setRevealed(true)}
      style={{
        cursor: revealed ? "auto" : "pointer",
        background: revealed ? "none" : "black",
        color: revealed ? "inherit" : "black",
        borderRadius: 4,
        padding: "0 4px",
        transition: "background 0.2s, color 0.2s",
        userSelect: revealed ? "text" : "none",
      }}
      tabIndex={0}
      role="button"
      aria-label={revealed ? undefined : "Reveal spoiler"}
    >
      {revealed ? children : <span style={{ opacity: 0 }}> {children} </span>}
    </span>
  );
};

export default Spoiler;
