import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'

function App() {

  return (
    <>
      <header >
        <Navbar />
      </header>
      <section className='flex-col  h-full w-full md:flex md:flex-row '>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Routes>
      </section>
      <footer className='h-16 bg-teal-700'>
        
      </footer>
    </>
  )
}

export default App
