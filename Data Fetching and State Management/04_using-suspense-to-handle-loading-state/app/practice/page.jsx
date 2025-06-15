import Fallback from "@/components/practice/Fallback";
import React, { lazy, Suspense } from "react";

const ComOne = lazy(() => import("../../components/practice/ComOne"));
const ComTwo = lazy(() => import("../../components/practice/ComTwo"));

const Practice = async () => {
  return (
    <div>
      <h2>Practice Page</h2>
      <Suspense fallback={<Fallback text="Com1" />}>
        <ComOne />
      </Suspense>
      <Suspense fallback={<Fallback text="Com2" />}>
        <ComTwo />
      </Suspense>
    </div>
  );
};

export default Practice;
