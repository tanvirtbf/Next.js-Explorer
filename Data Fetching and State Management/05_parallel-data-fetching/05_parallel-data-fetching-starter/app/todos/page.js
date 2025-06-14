const Todos = async () => {

  const [response, slowResponse2s, slowResponse3s] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5"),
    fetch("https://procodrr.vercel.app/?sleep=2000"),
    fetch("https://procodrr.vercel.app/?sleep=3000"),
  ]);

  const [todos, data2s, data3s] = await Promise.all([
    response.json(),
    slowResponse2s.json(),
    slowResponse3s.json(),
  ]);

  return (
    <>
      <h1>Todos</h1>
      <div className="todos-container">
        {todos.map(({ id, title, completed }) => (
          <div className="todo-item" key={id}>
            <input type="checkbox" checked={completed} readOnly />
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div>{JSON.stringify(data2s)}</div>
      <div>{JSON.stringify(data3s)}</div>
    </>
  );
};

export default Todos;
