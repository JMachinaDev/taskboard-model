import React from "react";
// import imageUrlbuilder from '@sanity/image-url';


const TasksTodo = (props) => {
  const { post, index } = props;
  
  // urlFor = (source) => {
  //   return this.builder.image(source)
  // };

	return (
    <main 
      className='main-container'
      to={post.slug.current}
      key={post.slug.current}
    >
      <section 
        className='task-container' 
        key={index}
      >
				{/* Tasks ToDo Container*/}
        <section 
          className='task-todo-container'
        >
          
					<section>
						<h3>Task: {post.title}</h3>
						<p>Description: {post.description}</p>
						<div>
              <span 
                type='date'>Date Post: {new Date(post.date).toLocaleDateString()}
              </span>
						</div>
              <p>Posted By: {post.name}</p>
              <img
                // src={urlFor(post.authorImage).url()}
                alt={post.name} 
              /> {/* author image goes here*/}
						<div>Done/Not Done</div>
            <a 
              href='#!'
            >
              Git Commit Link
            </a>

					</section>
				</section>
			</section>
		</main>
	);
};

export default TasksTodo;
