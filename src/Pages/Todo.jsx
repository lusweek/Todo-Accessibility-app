import React, { useEffect, useState } from 'react'
import { GrFormAdd } from "react-icons/gr"

//    ENTER CLICK
// https://bobbyhadz.com/blog/react-detect-enter-key-press

function Todo() {

  const [newTask, setNewTask] = useState(null)

  let firstRenderTodos = ''

  useEffect(() => {
    if (!localStorage.getItem('todos') || localStorage.getItem('todos').length === 0) {
      firstRenderTodos = ''
      setTodos(firstRenderTodos)
    }
      else {
        firstRenderTodos = JSON.parse(localStorage.getItem('todos'))
        setTodos(firstRenderTodos)
      }
  }, [])

  const [todos, setTodos] = useState(firstRenderTodos)

  const addNewTask = (e) => {
    e.preventDefault()
    let newTodoList = []
    newTodoList.push(newTask)
    if (todos.length === 0 || !todos) {
    }
    else {
       todos.map((todo) => newTodoList.push(todo))
    }
   
    setTodos(newTodoList)
    localStorage.setItem('todos', JSON.stringify(newTodoList))

    document.querySelector("#todo-input").value=''
  }

  const removeTask = (e, index, todo) => {
    let oldTodoList = todos
    let newTodoList = []

    let newDoneList = JSON.parse(localStorage.getItem('doneTodos'))
    if (!newDoneList) newDoneList = []

    oldTodoList.map((todo) => {

      let target = document.querySelector(`#h1-${index}`)

      if (target.innerHTML == todo) {
        newDoneList.push(todo)
      } else {
        newTodoList.push(todo)
      }
    })

    localStorage.removeItem('todos')
    localStorage.setItem('todos', JSON.stringify(newTodoList))
    setTodos(newTodoList)

    localStorage.removeItem('doneTodos')
    localStorage.setItem('doneTodos', JSON.stringify(newDoneList))
    
  }
 
  const handleCheckbox = (e, index, todo) => {
    if (window.confirm(`Do you want to check "${todo}" off the list?`)){
      removeTask(e, index, todo)
      e.preventDefault()
    } else e.preventDefault()
  }

  const handleKeyDown = (e, index, todo) => {
    if (e.key === "Enter") {
      handleCheckbox(e, index, todo)
    }
  }

  return (
    <section className='component-section'>
      <h1 className='h1-title margin-top'>Todo</h1>
      <h2 className='h2-title'>Write a new task or check of an existing tast</h2>

<form onSubmit={addNewTask}>
  <div className='new-todo-wrapper'>
      <label>New Todo</label>
        <input id='todo-input' type="text" onChange={(e) => setNewTask(e.target.value)} required />
    </div>

      <button id='add-btn'>
        Add task
      </button>
</form>

    
      
      <div className='line'></div>

      {!todos ? <h1>No todos</h1> : 
      todos.length===0 ? <h1>No todos</h1> : 
      todos.map((todo, index) => {
        return (

          <label key={Math.random()} onKeyDown={(e) => handleKeyDown(e, index, todo)} tabindex={0} htmlFor={`checkbox-${index}`} className='task-box'>
            <input key={Math.random()} tabindex={-1} id={`checkbox-${index}`} onClick={(e) => handleCheckbox(e, index, todo)} type="checkbox" />
             <h1 key={Math.random()} className='checkbox-h1' id={`h1-${index}`}>{todo}</h1>
          </label>
         
        )
      })
    }

    </section>
  )
}

export default Todo