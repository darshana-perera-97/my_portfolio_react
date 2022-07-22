import React from "react";
import BottomBar from "./BottomBar/BottomBar";
import LeftComponents from "./LeftComponents/LeftComponents";
import RightBar from "./RightBar/RightBar";

export default function Design() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <LeftComponents />
        <RightBar />
      </div>
      <BottomBar />
    </div>
  );
}
