import React from 'react'

const DemoTwo = () => {
    if(typeof window === "undefined"){
        console.log("This is a Server Component!");
    }else {
        console.log("This is a Client Component!");
    }
  return (
    <div>DemoTwo</div>
  )
}

export default DemoTwo