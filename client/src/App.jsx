import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect, Suspense } from 'react'
import './App.css'

import Welcome from './components/Welcome'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
const ExamLayout = React.lazy(() => import('./components/ExamLayout'))
import Layout from './components/Layout'
import PageNotFound from './components/PageNotFound'
import Verification from './components/Verification'
import Dashboard from './components/Dashboard'
// import AppContextProvider from './components/contexts/AppContextProvider'
import AppContext from './components/contexts/AppContext'
import Progressboard from './components/reports/Progressboard'

let flag = true

function App() {
  const [email, setEmail] = useState('')
  const [user, setUser] = useState('')
  const [load, setLoad] = useState(true)
  const [report, setReport] = useState(null)
  const [inExam, setInExam] = useState(false)


  useEffect(() => {

    if (flag) {
      flag = false
      const verifySession = async () => {
        const response = await fetch('http://localhost:3300/auth', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        })

        return response.json()
      }

      verifySession()
        .then(({ success, decoded }) => {
          console.log(success);
          if (success) {
            setEmail(decoded.email)
            setUser(decoded.user)
          }
        })
        .catch(err => console.error(err))
    }

  })


  return (
    <AppContext.Provider value={{ email, setEmail, user, setUser, option: { category: '', level: '' }, load, setLoad, report, setReport, inExam, setInExam}}>
      {/* All the react routers are defined here */}
      <Suspense fallback={<h3 className='text-xl mt-72 w-full text-center'>Exam page is loading...</h3>}>
        <Routes>
          {/* The layout router is the home page of our website */}
          <Route path='/' element={<Layout email={email} />}>
            <Route path='/' element={<Welcome />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            {email && <Route path='exam' element={<ExamLayout />} />}
            <Route path='verify' element={<Verification email={email} />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='result/progressboard' element={<Progressboard/>}/>
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </AppContext.Provider>

  )
}

export default App
