import React from 'react'

const Prac = async () => {
    const res = await fetch("https://procodrr.vercel.app/?sleep=2000")
    const data1 = await res.json()

    const res2 = await fetch("https://procodrr.vercel.app/?sleep=3000")
    const data2 = await res2.json()

  return (
    <div>
        <h1>Prac Page</h1>
        <h2>{data1.message}</h2>
        <h2>{data2.message}</h2>
    </div>
  )
}

export default Prac
