"use client"
import Link from "next/link";

const About = () => {
  console.log('About Page');
  if(typeof localStorage !== 'undefined'){
    console.log(localStorage);
  }
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link active">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>About Us</h1>
        <p>We are a company dedicated to providing quality services.</p>
      </div>
    </>
  );
};

export default About;
