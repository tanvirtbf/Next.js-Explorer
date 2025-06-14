import React from 'react'

const ComOne = async () => {
    const response1 = await fetch("https://procodrr.vercel.app/?sleep=2000")
    const data1 = await response1.json()
    
  return (
    <div>ComOne</div>
  )
}

export default ComOne