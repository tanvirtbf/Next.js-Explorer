import React, { lazy, Suspense } from "react";

const ComOne = lazy(() => import("../../components/prac/ComOne"))
const ComTwo = lazy(() => import("../../components/prac/ComTwo"))

const Prac = async () => {
  return (
    <div>
      <h1>Prac Page</h1>
      <Suspense fallback={<div>Loading ComOne...</div>}>
        <ComOne />
      </Suspense>
      <Suspense fallback={<div>Loading ComTwo...</div>}>
        <ComTwo />
      </Suspense>
    </div>
  );
};

export default Prac;
