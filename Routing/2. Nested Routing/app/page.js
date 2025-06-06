import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Hello, This is Home Page!</h1>
      <Link href="/about">About</Link>
      {" "}
      <Link href="/services">Services</Link>
    </>
  );
}
