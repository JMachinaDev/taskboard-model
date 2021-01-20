import React, {useState, useEffect} from 'react';
import TaskTodo from "./TasksTodo";
import TaskDone from './TasksDone';
import { Client } from '../client';

const PostTasksFromClient = () => {
  const[postData, setPost] = useState([]);

  const initializeData = () => {
    const client = new Client();
    client.fetchData()
      .then((data) => setPost(data))
      .catch(console.error);
  };
  useEffect(initializeData, []);

  return (
    <div className="post-container">
      <main className="tasks-wrapper">

        <section className='task-container todo'>
          <h1>Tasks</h1>
          { postData && postData.filter(p => !p.url).map((post, index) => (
            <TaskTodo post={post} key={index} />
          ))}
        </section>

        <section className='task-container done'>
          <h1>Completed</h1>
          { postData && postData.filter(p => p.url).map((post, index) => (
            <TaskDone  post={post} key={index} />
          ))}
        </section>

      </main>
    </div>
	);
}


export default PostTasksFromClient;