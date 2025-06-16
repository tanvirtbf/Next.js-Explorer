"use client"
import React from 'react'

const Error = ({ error }) => {
    console.dir(error);
    console.log(error.message);
  return (
    <div>Error</div>
  )
}

export default Error