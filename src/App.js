import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './Pages/Todo';
import DoneTasks from './Pages/DoneTasks';
import About from './Pages/About';
import { useEffect, useState } from 'react';

function App() {

  const [formInfo, setFormInfo] = useState(false)

  const leaveSight = (e) => {
    if (formInfo === true) {
      if (!window.confirm('Do you want to leave page? Form will not be saved')) {
        e.preventDefault()
        document.querySelector('#aboutLink').classList.add("nav-selected")
        document.querySelector('#doneLink').classList.remove("nav-selected")
        document.querySelector('#homeLink').classList.remove("nav-selected")
      }
    }
  }

  const [onHome, setOnHome] = useState(true)
  const [onDone, setOnDone] = useState(false)
  const [onAbout, setOnAbout] = useState(false)

  useEffect(() => {

    const home = document.querySelector('#homeLink')
    const done = document.querySelector('#doneLink')
    const about = document.querySelector('#aboutLink')

    document.querySelector("#doneLink").addEventListener('click', () => {
      done.classList.add("nav-selected")
      about.classList.remove("nav-selected")
      home.classList.remove("nav-selected")
      setOnDone(true)
      setOnAbout(false)
      setOnHome(false)
    })

    document.querySelector("#homeLink").addEventListener("click", () => {
      home.classList.add("nav-selected")
      about.classList.remove("nav-selected")
      done.classList.remove("nav-selected")
      setOnDone(false)
      setOnAbout(false)
      setOnHome(true)
    })

    document.querySelector("#aboutLink").addEventListener("click", () => {
      about.classList.add("nav-selected")
      done.classList.remove("nav-selected")
      home.classList.remove("nav-selected")
      setOnDone(false)
      setOnAbout(true)
      setOnHome(false)
    })

  }, [])

  return (
    <>
      <nav id='navbar'>
          <Link onClick={leaveSight} id='homeLink' to="/" className='link-text link-btn nav-selected'>Todos</Link>
          <Link onClick={leaveSight} id='doneLink' to="/done" className='link-text link-btn'>Done Tasks</Link>
          <Link id='aboutLink' to="/about" className='link-text link-btn'>About Accessibility</Link>          
      </nav>

      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/done' element={<DoneTasks />} />
        <Route path='/about' element={<About setFormInfo={setFormInfo} />} />
      </Routes>
    </>
  );
}

export default App;
