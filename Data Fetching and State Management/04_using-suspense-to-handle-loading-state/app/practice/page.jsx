import React from 'react'


const Practice = async () => {

    const response1 = await fetch("https://procodrr.vercel.app/?sleep=2000")
    const data1 = await response1.json()

    const response2 = await fetch("https://procodrr.vercel.app/?sleep=3000")
    const data2 = await response2.json()


  return (
    <div>Practice</div>
  )
}

export default Practice