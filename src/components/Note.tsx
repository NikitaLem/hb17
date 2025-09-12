import React from "react";

export interface NoteProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Note: React.FC<NoteProps> = ({
  children,
  className = "",
  style,
}) => {
  return (
    <div
      className={`note-sheet ${className}`}
      style={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        background: "#fffbe6",
        border: "1px solid #ffe58f",
        borderRadius: 8,
        padding: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        minHeight: 100,
        width: "100%",
        fontSize: "1.25rem",
        textAlign: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
