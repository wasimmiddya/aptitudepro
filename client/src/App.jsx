import { Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
import ExamLayout from './components/ExamLayout'
import Layout from './components/Layout'
import PageNotFound from './components/PageNotFound'


function App() {
  let isLoggedIn = true

  return (
    <>
      {/* All the react routers are defined here */}
      <Routes>
        {/* The layout router is the home page of our website */}
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Welcome />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          {
            isLoggedIn && <Route path='exam' element={<ExamLayout />} />
          }
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
