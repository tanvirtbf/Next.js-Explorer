export function GET() {
  const todosData = [
    { id: 1, text: "Learn Next.js 15", completed: false },
    { id: 2, text: "Master Node.js", completed: true },
    { id: 3, text: "Learn MongoDB", completed: true },
  ];

  console.log("Running GET request in todos route");
  return new Response(JSON.stringify(todosData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
