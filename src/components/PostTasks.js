import React, {useState, useEffect} from 'react';
import TasksTodo from "./TasksTodo";
import { Client } from '../client';

const PostTasksFromClient = () => {
  const[postData, setPost] = useState([]);

  const initializeData = () => {
    const client = new Client();
    client.fetchData()
      .then((data) => setPost(data))
      .catch(console.error);
  };

  // Object type
  // console.log(typeof postData);
  console.log(postData)
  console.log(postData[2]["url"]);

  // Function
  // console.log(typeof setPost);


  useEffect(initializeData, []);

  return (
		<>
    <main className="tasks-wrapper">

      <div className="todo">
        <h2>Tickets</h2>
        <section className="tasks-todo wrapper">
          { postData ? 
            postData.map((post, index) => (
              <TasksTodo key={index} post={post} index={index}/>
            ))
          : <div>Cannot Return Data, Comeback Later....</div> }
        </section>
      </div>

      <div className="done">
        <h2>Completed</h2>
        <section className="tasks-done wrapper">
          { postData ? 
            postData.map((post, index) => (
              <TasksTodo key={index} post={post} index={index}/>
          ))
          : <div>Cannot Return Data, Comeback Later....</div> }
        </section>
      </div>

    </main>
		</>
	);
}


export default PostTasksFromClient;