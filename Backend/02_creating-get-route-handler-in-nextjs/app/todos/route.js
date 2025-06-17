
export function GET(){
  console.log('Running GET request in todos route');
  return new Response(JSON.stringify({ message: 'Hello from todos route' }), {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
