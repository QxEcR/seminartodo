import React from "react"
import { useState, useEffect, useRef } from "react"
import "./Todo.css"
import Item from "./Item"
import { v4 as uuid } from "uuid"

const Todo = () => {
	const [todos, setTodos] = useState([])

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

		let id = uuid()

		const newTodos = [...todos, { id, text: newTodo, isCompleted: false }]
		setTodos(newTodos)
		localStorage.setItem("TEST_TODO_LIST", JSON.stringify(newTodos))

		inputRef.current.value = ""
	}

	const updateTodos = (newTodos) => {
		setTodos(newTodos)
		localStorage.setItem("TEST_TODO_LIST", JSON.stringify(newTodos))
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
					<Item
						key={item.id}
						id={item.id}
						todo={item.text}
						isCompleted={item.isCompleted}
						updateTodos={updateTodos}
					/>
				))}
			</div>
		</div>
	)
}

export default Todo
