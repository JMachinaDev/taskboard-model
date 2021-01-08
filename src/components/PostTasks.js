import React, {useState, useEffect} from 'react';
import { Client } from '../client';
import TasksTodoAndTasksDone from "./Tasks";

const PostTasksFromClient = (props) => {
  const[postData, setPost] = useState([]);

  const initializeData = () => {
    const client = new Client();
    client.fetchData()
      .then((data) => setPost(data))
      .catch(console.error);
  };
  
  useEffect(initializeData, []);

  return (
		<>
      { postData ? 
        postData.map((post, index) => (
          <TasksTodoAndTasksDone key={index} post={post} index={index}/>
        ))
      : <div>Cannot Return Data, Comeback Later....</div> };
		</>
	);
}


export default PostTasksFromClient;