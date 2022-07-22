import React from "react";

export default function SingleTopic(prop) {
  return (
    <div>
      <p
        style={{
          color: "white",
          textOrientation: "mixed",
          writingMode: "vertical-rl",
          padding: "30px 0px",
          fontSize: "20px",
          margin: "13px",
        }}
      >
        {prop.data}
      </p>
    </div>
  );
}
