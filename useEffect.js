import React, { useState, useEffect } from "react";

const TodoTest = () => {
  const [resorceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resorceType}`)
      .then((response) => response.json())
      .then((data) =>setItems(data));

      return () =>{console.log("cleanup the code")}
  }, [resorceType]);
  

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts </button>
        <button onClick={() => setResourceType("users")}> Users</button>
        <button onClick={() => setResourceType("comments")}>Commenst </button>
        <p> {resorceType}</p>
        <p> {items.map(item =>{return <pre>{JSON.stringify(item)} </pre>})} </p>
      </div>
    </>
  );
};
export default TodoTest;
