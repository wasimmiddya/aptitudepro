import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import Welcome from './components/Welcome'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
import ExamLayout from './components/ExamLayout'
import Layout from './components/Layout'
import PageNotFound from './components/PageNotFound'
import Success from './components/Success'
import Verification from './components/Verification'


function App() {
  const [email, setEmail] = useState('')

  const handleLoggedIn = (email) => {
    setEmail(email)
  }

  return (
    <>
      {/* All the react routers are defined here */}
      <Routes>
        {/* The layout router is the home page of our website */}
        <Route path='/' element={<Layout email={email}/>}>
          <Route path='/' element={<Welcome />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup handleLogIn={handleLoggedIn}/>} />
          {
            // If the user/learner is logged in then this component will be rendered
            email && <Route path='exam' element={<ExamLayout />} />
          }
          <Route path='success' element={<Success/>}/>
          <Route path='verify' element={<Verification email={email}/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
