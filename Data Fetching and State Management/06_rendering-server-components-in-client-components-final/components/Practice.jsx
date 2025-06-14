import React from "react";
import DemoOne from "./DemoOne";
import DemoTwo from "./DemoTwo";

const Practice = () => {
  return (
    <div>
      <h1>Practice Page</h1>
      <DemoOne>
        <h1>Demo One</h1>
        <DemoTwo />
      </DemoOne>
    </div>
  );
};

export default Practice;
