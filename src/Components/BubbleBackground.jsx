import React from "react";

const BubbleBackground = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        background: "rgba(255,0,0,0.15)",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background: "white",
        }}
      />
    </div>
  );
};

export default BubbleBackground;
