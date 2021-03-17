import React, { useState } from "react";

export default function ToDoList() {
	const [taskList, setTaskList] = useState([]);
	const [input, setInput] = useState("");

	const addTask = event => {
		if (event.keyCode == 13) {
			setTaskList(taskList.concat(input));
			setInput("");
		}
	};

	const deleteTask = index => {
		taskList.splice(index, 1);
		setTaskList([...taskList]);
	};

	return (
		<div className="container">
			<h1>todos</h1>
			<div className="list-container">
				<input
					type="text"
					onChange={e => setInput(e.target.value)}
					value={input}
					onKeyUp={addTask}
					placeholder={
						taskList.length == 0
							? "No pending tasks, add task here"
							: "Add task here"
					}
				/>
				<ul>
					{taskList.map((task, index) => (
						<li key={index}>
							{task}
							<span onClick={() => deleteTask()}>
								<i className="fas fa-times"></i>
							</span>
						</li>
					))}
				</ul>
				<p>
					{taskList.length == 0
						? "There are no pending tasks"
						: taskList.length == 1
						? taskList.length + " item left"
						: taskList.length + " items left"}
				</p>
			</div>
		</div>
	);
}
