// import { Route, Routes } from 'react-router-dom'
import './App.css'
import ExamLayout from './components/ExamLayout'
import Navbar from './components/Navbar'
// import Welcome from './components/Welcome'
// import Login from './components/Login'
// import Signup from './components/Signup'
// import About from './components/About'

/**
# React App Codebase Documentary Comment

This document provides a commentary on the React application code written in the file 'App.js'. The code utilizes the React Router for navigation and comprises various components for the application's structure.

---

## Code Overview
-------------------------------------------
The code primarily serves as the main application component for a React-based web application. It contains routing logic, rendering components for different routes, and managing the overall layout structure of the application.

## Dependencies
--------------------------------------------
- `react-router-dom`: This package provides essential routing functionalities, allowing the application to navigate between different components based on the defined routes.

---

## Component Structure
-----------------------------------------
1. **Navbar Component**:
   - Imported from './components/Navbar'.
   - Represents the application's header section.

2. **Welcome Component**:
   - Imported from './components/Welcome'.
   - Renders content for the default route ('/').

3. **Login Component**:
   - Imported from './components/Login'.
   - Renders content for the 'login' route.

4. **Signup Component**:
   - Imported from './components/Signup'.
   - Renders content for the 'signup' route.

5. **About Component**:
   - Imported from './components/About'.
   - Renders content for the 'about' route.

---

## Functionality
-------------------------------------
- **Routing Setup**:
  - Utilizes the `Routes` and `Route` components from 'react-router-dom' to define routing rules.
  - Maps specific components to corresponding routes, controlling the content displayed based on the URL.

- **Layout Structure**:
  - Divides the layout into header, section, and footer elements.
  - Renders the `Navbar` component in the header.
  - Displays different components in the section based on the current route.

---

This document provides an insightful overview of the React application structure, its dependencies, components, and how it manages routing and styling within the application.
 */

function App() {

  return (
    <>
      <header >
        <Navbar />
      </header>
      <section className={`flex-col  h-full w-full md:flex md:flex-row`}>
        {/* <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Routes> */}
        <ExamLayout/>
      </section>
      <footer className='h-16 bg-teal-700 '>

      </footer>
    </>
  )
}

export default App
