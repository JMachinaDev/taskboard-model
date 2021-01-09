import React from 'react';

const TaskDone = (props) => {
  return (
    <>
    {/* Tasks Done Container */}
      <section 
        className='task-done-container'
        key={index}
      >
          <header>
            <h2>Tasks Done</h2>
          </header>
          <section>
            <div>Task 1</div>
            <div>Task 1</div>
            <div>Task 1</div>
            <div>Task 1</div>
            <div>Task 1</div>
          </section>
      </section>
    </>
  )
}

export default TaskDone;