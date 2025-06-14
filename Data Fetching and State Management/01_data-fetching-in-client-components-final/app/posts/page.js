
const Posts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  const data = response.json()

  return (
    <>
      <h1>Posts</h1>
      <div className="posts-container">
        {data.map(({ id, title, body }) => (
          <div className="post-card" key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
