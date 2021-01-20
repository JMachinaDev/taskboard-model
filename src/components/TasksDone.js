import React, { useState } from 'react';
import urlFor from '../components/ImageBuilder';

const TaskDone = (props) => {
  const { post } = props;
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  
  function displayTaskInfo (e) {
    e.preventDefault();
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <main to={post.slug.current} >
      <section >

        <section>
          <header style={{display: 'inline-block'}}>
            <h4>Task #: {post.title}</h4>
          </header>
          <button className="button-style" onClick={displayTaskInfo}>&gt;</button>
        </section>

        { showAdditionalInfo &&
          <section className="display-container">
            <div className="task-date">Completed: {new Date(post.date).toLocaleDateString()}</div>
            <a className="task-commit-link" href={post.url} target="_blank" rel="noreferrer">GIT COMMIT</a>
            <p>Description: {post.description}</p>
            <span className="image-container">

              <img
                src={urlFor(post.authorImage).url()}
                alt={post.name}
                className="author-image"
              />
              <p>{post.name}</p>
            </span>

          </section>
        }

      </section>
		</main>
  )
};

export default TaskDone;