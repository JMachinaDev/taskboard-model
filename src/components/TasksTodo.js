import React from "react";
import urlFor from '../components/ImageBuilder';

const TasksTodo = (props) => {
  const { post, index } = props;

  return (
    <main
      to={post.slug.current}
      key={post.slug.current}
    >
      <section
        className='task-todo-container'
        key={index}
      >
          <header>
            <h3>Task: {post.title}</h3>
          </header>
          <p>Description: {post.description}</p>

          <div>
            <span
              type='date'>Posted: {new Date(post.date).toLocaleDateString()}
            </span>
          </div>

          <div>{/*Red = Not Done, Green = Done*/}</div>

          <span className="image-container">
            <img
              src={urlFor(post.authorImage).url()}
              alt={post.name}
              className="author-image"
            />
            <p>{post.name}</p>
          </span>

      </section>
		</main>
	);
};

export default TasksTodo;
