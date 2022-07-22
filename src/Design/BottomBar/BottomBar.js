import React from "react";

export default function BottomBar() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        background: "#29323c",
        width: "100%",
      }}
    >
      <p
        style={{
          margin: "0px",
          padding: "10px",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        <b>Copyright</b> © Darshana Perera
      </p>
    </div>
  );
}
