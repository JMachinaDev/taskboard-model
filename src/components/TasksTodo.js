import React from "react";
import urlFor from '../components/ImageBuilder';

const TaskTodo = (props) => {
  const { post } = props;

  return (
    <main to={post.slug.current} >
      <section>

        <section>
          <header style={{display: 'inline-block', paddingRight: 16}}>
            <h4>Task #: {post.title}</h4>
            <span className="task-date">{new Date(post.date).toLocaleDateString()}</span>
          </header>
        </section>

        <section className="display-container">
          <p>Description: {post.description}</p>
          <a href={post.url} target="_blank" rel="noreferrer">{post.url}</a>
          <span className="image-container">
            <img
              src={urlFor(post.authorImage).url()}
              alt={post.name}
              className="author-image"
            />
            <p>{post.name}</p>
          </span>
        </section>

      </section>
		</main>
	);
};

export default TaskTodo;
