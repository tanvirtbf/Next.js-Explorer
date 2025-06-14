import React from 'react'

const ComTwo = async () => {
    const response2 = await fetch("https://procodrr.vercel.app/?sleep=3000")
    const data2 = await response2.json()

  return (
    <div>ComTwo</div>
  )
}

export default ComTwo