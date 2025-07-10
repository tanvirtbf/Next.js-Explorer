"use client";
import React from "react";

const Practice = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [data, setData] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setData((prev) => [...prev, { id:crypto.randomUUID(), username, password }]);

    setUsername("");
    setPassword("");
  }

  function handleUpdate(id){
    console.log(id);
  }
  function handleDelete(id){
    console.log(id);
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Password"
          className="border border-gray-300 rounded-md p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
          Submit
        </button>
      </form>

      <div className="flex flex-col gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex gap-2 justify-between border p-4 rounded-2xl">
            <div className="flex gap-2 items-center">
              <p>UserName : {item.username}</p>
              <div className="w-1 h-full bg-black rounded-full"></div>
              <p>Password : {item.password}</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white rounded-md p-2" onClick={()=>handleUpdate(item.id)}>Update</button>
              <button className="bg-blue-500 text-white rounded-md p-2" onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice;
