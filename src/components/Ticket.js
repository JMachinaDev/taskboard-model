import React from 'react';

const Ticket = () => {
  return (
      <>
          <main className="main-container">
              <section className="task-todo-container">
                  <header>
                      <h2>Tasks</h2>
                  </header>

                  <section>
                      <h3>Task ToDo</h3>
                      <p>Description</p>
                      <input type="date">
                          Date published
                      </input>
                      <img alt="">Author</img>
                      <div>Done/Not Done</div>
                      <a href="#!" ref="_noreferrer">Git Commit Link</a>
                  </section>
              </section>

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
          </main>
      </>
  )
}

export default Ticket;