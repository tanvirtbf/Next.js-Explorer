import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <Link href={"/"}>Home</Link>
        {" "}
        <Link href={"/about/child-about-one"}>Child One</Link>
        <Link href={"/about/child-about-two"}>Child Two</Link>
    </div>
  )
}

export default About