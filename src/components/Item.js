import React from "react"
import "./Item.css"
import complete_Icon from "../assets/imgs/complete_Icon.png"
import edit_Icon from "../assets/imgs/edit_Icon.png"
import delete_Icon from "../assets/imgs/delete_Icon.png"

const Item = ({ id, todo, isCompleted, updateTodos }) => {
	const getTodos = () => {
		return JSON.parse(localStorage.getItem("TEST_TODO_LIST"))
	}

	const handleComplete = () => {
		let todos = getTodos()
		console.log(todos)
		todos.map((item) => {
			if (item.id === id) {
				item.isCompleted = !item.isCompleted
			}
		})
		console.log(todos)
		updateTodos(todos)
	}

	const handleEdit = () => {
		let todos = getTodos()
		let newTodo = prompt("Enter new todo: ")
		if (newTodo === "") return
		todos.map((item) => {
			if (item.id === id) {
				item.text = newTodo
			}
		})
		updateTodos(todos)
	}

	const handleDelete = () => {
		let todos = getTodos()
		todos.map((item, index) => {
			if (item.id === id) {
				todos.splice(index, 1)
			}
		})
		updateTodos(todos)
	}

	return (
		<div className='todoElem' key={id}>
			<div className='todoItem'>
				{isCompleted ? <p className='completed'>{todo}</p> : <p>{todo}</p>}
			</div>
			<div className='todoIcons'>
				<img
					className='icon complete'
					onClick={handleComplete}
					src={complete_Icon}
				/>
				<img className='icon edit' onClick={handleEdit} src={edit_Icon} />
				<img className='icon delete' onClick={handleDelete} src={delete_Icon} />
			</div>
		</div>
	)
}

export default Item
