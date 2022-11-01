import React, { useEffect, useState } from 'react'

function DoneTasks() {

  let firstRenderDoneTodos = ''

  useEffect(() => {
    if (!localStorage.getItem('doneTodos') || localStorage.getItem('doneTodos').length === 0) {
      firstRenderDoneTodos = ''
      setDoneTodos(firstRenderDoneTodos)
    }
      else {
        firstRenderDoneTodos = JSON.parse(localStorage.getItem('doneTodos'))
        setDoneTodos(firstRenderDoneTodos)
      }
  }, [])

  const [doneTodos, setDoneTodos] = useState(firstRenderDoneTodos)


  const restoreTask = (e, index, todo) => {
    let oldDoneList = doneTodos
    let newDoneList = []

    let newTodoList = JSON.parse(localStorage.getItem('todos'))
    if (!newTodoList) newTodoList = []

    oldDoneList.map((todo) => {
      let target = document.querySelector(`#done-h1-${index}`)

      if (target.innerHTML == todo) {
        newTodoList.push(todo)
      } else {
        newDoneList.push(todo)
      }
    })

    console.log('newDoneList after map: ', newDoneList);

    localStorage.removeItem('doneTodos')
    localStorage.setItem('doneTodos', JSON.stringify(newDoneList))
    setDoneTodos(newDoneList)

    localStorage.removeItem('todos')
    localStorage.setItem('todos', JSON.stringify(newTodoList))

  }

  const handleCheckbox = (e, index, todo) => {
    if (window.confirm(`Do you want to restore "${todo}"?`)){
      restoreTask(e, index, todo)
      e.preventDefault()
    } else e.preventDefault()
  }


  return (
    <section className='component-section'>
      <h1 className='h1-title margin-top'>DoneTasks</h1>
      <h2 className='h2-title'>Click on a task to restor it</h2>

      <div className='line'></div>

      {!doneTodos ? <h1>No done todos</h1> : 
      doneTodos.length===0 ? <h1>No done todos</h1> : 
      doneTodos.map((todo, index) => {
        return (
          <label tabindex={0} for={`done-checkbox-${index}`} className='task-box'>
            <input tabindex={-1} id={`done-checkbox-${index}`} onClick={(e) => handleCheckbox(e, index, todo)} type="checkbox" checked />
             <h1 className='checkbox-h1' id={`done-h1-${index}`}>{todo}</h1>
          </label>
         
        )
      })
    }

    </section>
    
  )
}

export default DoneTasks