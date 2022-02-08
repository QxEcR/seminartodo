import React from "react"
import { useState, useEffect, useRef } from "react"
import "./Todo.css"

const Todo = () => {
	const [todos, setTodos] = useState(() => [])

	let inputRef = useRef()

	useEffect(() => {
		let savedTodos = JSON.parse(localStorage.getItem("TEST_TODO_LIST"))
		if (savedTodos) {
			setTodos(savedTodos)
		}
	}, [])

	const addTodo = (e) => {
		const newTodo = inputRef.current.value
		if (newTodo === "") return

		let id = todos.length

		const newTodos = [...todos, { id, text: newTodo, completed: false }]
		setTodos(newTodos)
		localStorage.setItem("TEST_TODO_LIST", JSON.stringify(newTodos))

		inputRef.current.value = ""
	}

	return (
		<div>
			<div>
				<input
					ref={inputRef}
					placeholder='Enter a new Todo'
					className='todo-input-field'
				/>
				<button onClick={addTodo} className='todo-input-btn'>
					Add Todo
				</button>
			</div>

			<div className='todosContainer'>
				{todos.map((item) => (
					<div className='todoElem' key={item.id}>
						<p>{item.text}</p>
						{/* complete todo */}
						{/* update todo */}
						{/* delete todo */}
					</div>
				))}
			</div>
		</div>
	)
}

export default Todo
