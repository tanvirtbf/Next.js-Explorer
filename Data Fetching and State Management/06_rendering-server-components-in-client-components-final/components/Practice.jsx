import React from "react";
import DemoOne from "./DemoOne";
import DemoTwo from "./DemoTwo";

const Practice = () => {
  return (
    <div>
      <h1>Practice Page</h1>
      <DemoOne
        content={
          <>
            <h1>Demo One</h1>
            <DemoTwo />
          </>
        }
      />
    </div>
  );
};

export default Practice;
