import React from 'react'

const FilePath = async ({params}) => {
    console.log(await params);
  return (
    <div>FilePath</div>
  )
}

export default FilePath