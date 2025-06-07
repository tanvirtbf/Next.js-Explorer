import Link from 'next/link'

export default async function Home(props) {
  console.log(await props.params);
  console.log(await props.searchParams);

  // if route have some query parameter like route/?name=tanvir&age=25 then...
  console.log(await props.searchParams); // {name: 'tanvir', age: '25'}
  
  return (
    <>
      <h1>Hello, This is Home Page!</h1>
      <Link href="/about">About</Link>
      {" "}
      <Link href="/services">Services</Link>
    </>
  );
}
