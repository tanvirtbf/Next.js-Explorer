import React from 'react'

const ComOne = async () => {
    const res = await fetch("https://procodrr.vercel.app/?sleep=2000")
    const data = await res.json()
  return (
    <div>
        <h1>Component 1</h1>
        <h3>{data.message}</h3>
    </div>
  )
}

export default ComOne