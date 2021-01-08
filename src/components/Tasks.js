import React from "react";

const TasksTodoAndTasksDone = (props) => {
	const { post, index } = props;
	return (
		<main className='main-container'>
			<section className='task-container' key={index}>
				{/* Tasks ToDo Container*/}
				<section className='task-todo-container'>
					<header style={{ backgroundColor: "red" }}>
						<h2>Tasks</h2>
					</header>

					<section>
						<h3>Task: {post.title}</h3>
						<p>Description: {post.description}</p>

						<div>
							<span type='date'>Date Post: {new Date(post.date).toLocaleDateString()}</span>
							<img alt='' /> {/* author image goes here*/}
              {/* <p>Posted By: {post.author}</p> */}
						</div>

						<div>Done/Not Done</div>
						<a href='#!'>Git Commit Link</a>
					</section>
				</section>

				{/*Tasks Done Container*/}
				<section className='task-done-container'>
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
	);
};

export default TasksTodoAndTasksDone;
