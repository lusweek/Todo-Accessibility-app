import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './Pages/Todo';
import DoneTasks from './Pages/DoneTasks';
import About from './Pages/About';

function App() {

  const home = document.querySelector('#homeLink')
  const done = document.querySelector('#doneLink')
  const about = document.querySelector('#aboutLink')


  const handleHome = (e) => {
    home.classList.add('nav-selected')
    done.classList.remove('nav-selected')
    about.classList.remove('nav-selected')
  }

  const handleDone = () => {
    home.classList.remove('nav-selected')
    done.classList.add('nav-selected')
    about.classList.remove('nav-selected')
  }

  const handleAbout = () => {
    home.classList.remove('nav-selected')
    done.classList.remove('nav-selected')
    about.classList.add('nav-selected')
  }

  return (
    <>
      <nav id='navbar'>
          <Link id='homeLink' onClick={(e) => handleHome(e)} to="/" className='link-text link-btn nav-selected'>Todos</Link>
          <Link id='doneLink' onClick={handleDone} to="/done" className='link-text link-btn'>Done Tasks</Link>
          <Link id='aboutLink' onClick={handleAbout} to="/about" className='link-text link-btn'>About Accessibility</Link>          
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
