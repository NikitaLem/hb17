import React, { useState } from "react";
import { Note, type NoteProps } from "./Note";

interface NoteBookProps {
  notes: NoteProps[];
  className?: string;
}

export const NoteBook: React.FC<NoteBookProps> = ({ notes, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < notes.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  if (notes.length === 0) {
    return <div>No notes available.</div>;
  }

  return (
    <div
      className={className}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ marginBottom: 8 }}>
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          {"<"}
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === notes.length - 1}
        >
          {">"}
        </button>
      </div>
      <Note {...notes[currentIndex]} />
    </div>
  );
};
