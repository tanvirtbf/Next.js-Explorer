import React from 'react'

const Blog = async ({params, searchParams}) => {
    console.log(await params);
    console.log(await searchParams);
  return (
    <div>Blog</div>
  )
}

export default Blog