import React from 'react'

const ComTwo = async () => {
    const res = await fetch("https://procodrr.vercel.app/?sleep=4000")
    const data = await res.json()
  return (
    <div>
        <h1>Component Two</h1>
        <h3>{data.message}</h3>
    </div>
  )
}

export default ComTwo