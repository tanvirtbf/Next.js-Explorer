import React from 'react'

const Comments = async ({params}) => {
    console.log(await params);
  return (
    <div>Comments</div>
  )
}

export default Comments
