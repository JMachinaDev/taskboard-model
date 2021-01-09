import React, {useState, useEffect} from 'react';
import { Client } from '../client';
import TasksTodo from "./TasksTodo";

// import imageUrlbuilder from '@sanity/image-url';
// builder = () => ImageUrlBuilder(this.client);

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
    <main>
      <section className="container-wrapper">
        { postData ? 
          postData.map((post, index) => (
            <TasksTodo key={index} post={post} index={index}/>
          ))
        : <div>Cannot Return Data, Comeback Later....</div> };
      </section>
      <section>
        {/* Task Done Section */}
      </section>
    </main>
		</>
	);
}


export default PostTasksFromClient;