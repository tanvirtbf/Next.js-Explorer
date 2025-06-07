import React from 'react'

const FilePath = async ({params}) => {
    console.log(await params);
    const {filePath} = await params
  return (
    <div>FilePath : {filePath?.join("/")}</div>
  )
}

export default FilePath