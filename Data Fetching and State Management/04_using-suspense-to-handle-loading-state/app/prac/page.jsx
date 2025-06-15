import React from "react";

async function fetchData(url) {
  const response = await fetch(url);
  return await response.json();
}

const Prac = async () => {
  const [data1, data2] = await Promise.all([
    fetchData("https://procodrr.vercel.app/?sleep=2000"),
    fetchData("https://procodrr.vercel.app/?sleep=3000"),
  ]);

  return (
    <div>
      <h1>Prac Page</h1>
      <h2>{data1.message}</h2>
      <h2>{data2.message}</h2>
    </div>
  );
};

export default Prac;
