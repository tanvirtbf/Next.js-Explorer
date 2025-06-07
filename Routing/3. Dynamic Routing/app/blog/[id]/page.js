import React from 'react'

const DynamciBlogPage = async (props) => {
    console.log(await props.params.id);
    const params = await props.params.id
  return (
    <div>DynamciBlogPage : {params}</div>
  )
}

export default DynamciBlogPage