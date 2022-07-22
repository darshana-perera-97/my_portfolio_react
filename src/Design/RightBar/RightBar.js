import React from "react";

export default function RightBar() {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        background: "#29323c",
        height: "100%",
      }}
    >
      <p
        style={{
          color: "white",
          textOrientation: "mixed",
          writingMode: "vertical-rl",
        }}
      >
        RightBar
      </p>
    </div>
  );
}
