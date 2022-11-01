import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './Pages/Todo';
import DoneTasks from './Pages/DoneTasks';
import About from './Pages/About';
import { useEffect } from 'react';

function App() {

  useEffect(() => {

    const home = document.querySelector('#homeLink')
    const done = document.querySelector('#doneLink')
    const about = document.querySelector('#aboutLink')

    document.querySelector("#doneLink").addEventListener('click', () => {
      done.classList.add("nav-selected")
      about.classList.remove("nav-selected")
      home.classList.remove("nav-selected")
    })

    document.querySelector("#homeLink").addEventListener("click", () => {
      home.classList.add("nav-selected")
      about.classList.remove("nav-selected")
      done.classList.remove("nav-selected")
    })

    document.querySelector("#aboutLink").addEventListener("click", () => {
      about.classList.add("nav-selected")
      done.classList.remove("nav-selected")
      home.classList.remove("nav-selected")
    })

  }, [])

  return (
    <>
      <nav id='navbar'>
          <Link id='homeLink' to="/" className='link-text link-btn nav-selected'>Todos</Link>
          <Link id='doneLink' to="/done" className='link-text link-btn'>Done Tasks</Link>
          <Link id='aboutLink' to="/about" className='link-text link-btn'>About Accessibility</Link>          
      </nav>

      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/done' element={<DoneTasks />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
