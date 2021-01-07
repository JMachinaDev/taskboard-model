import React from 'react';

const TasksTodoAndTasksDone = (post, index) => {
  return (
      <>
          <main className="main-container">

            <section 
              className="task-container"
              key={index}
              >
              {/* Tasks ToDo */}
              <section className="task-todo-container">
                  <header>
                      <h2>{post.title}</h2>
                  </header>

                  <section>
                      <h3>Task ToDo</h3>
                      <p>Description</p>

                      <div>
                        <span type="date">Date published</span>
                        <img alt=''/> {/* author image goes here*/}
                      </div>

                      <div>Done/Not Done</div>
                      <a href="#!" >Git Commit Link</a>

                  </section>
              </section>

              {/*Tasks Done */}
              <section className="task-done-container">
                  <header>
                      <h2>Tasks Done</h2>
                  </header>
                  <section>
                      {/* where done tasks will be */}
                      <div>Task 1</div>
                      <div>Task 1</div>
                      <div>Task 1</div>
                      <div>Task 1</div>
                      <div>Task 1</div>
                  </section>
              </section>
            </section>

          </main>
      </>
  )
}

export default TasksTodoAndTasksDone;