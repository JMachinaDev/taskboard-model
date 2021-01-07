import React, {useState, useEffect} from 'react';
import sanityClient from 'sanity';
import TasksTodoAndTasksDone from Tasks.js;

const PostTasksFromClient = () => {
  
  const[postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"]{
        title,
        slug,
        date,
        description,
        tags
    }`)
    .then((data) => setPost(data))
    .catch(console.error);
  }, []);

  return (
    <>
      { postData && postData.map((post, index) => (
        <TasksTodoAndTasksDone post={...post} index={...index}/>
      ))};
    </>
  )
}


export default PostTasksFromClient;