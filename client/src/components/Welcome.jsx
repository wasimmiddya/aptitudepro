/**
 *  This is welcome page. User will see this page whenever they enter in our website.
 */
import { useNavigate } from 'react-router-dom'
import BarLoader from './Tools/BarLoader'
import { useContext } from 'react'
import AppContext from './contexts/AppContext'


function Welcome() {
  const navigate = useNavigate()
  const {email} = useContext(AppContext)

  const handleNavigate = () => {
    if (email) {
      navigate('/dashboard')
    } 
  }

  return (
    <>
      {/* This is the image of welcome page */}
      <div className='w-full flex justify-center items-center' id="img-container">
        <img className='w-[400px] md:w-[600px] hidden md:inline-block' src="education_imageHD.png" alt="student illustration" />
      </div>

      {/* This below code will render the welcome text */}
      <div className="grid place-items-center h-full bg-[url('education_imageHD.png')] bg-cover bg-no-repeat bg-center md:bg-none">
        <div className="w-[80%] md:w-[55%] bg-white/90 px-4 py-3 rounded-md border border-slate-400 ">
          <h2 className="text-2xl font-semibold my-1 md:text-3xl md:my-3 text-center text-slate-700">Welcome</h2>
          <p className="text-lg break-words text-center text-slate-500">Hi there everyone, welcome to <span className="font-semibold text-pink-400">Aptitude Pro</span>. We are happy to provide you a plartform where you can practice and enhance your aptitude skills. Ofcorse in absolutely free of cost!!!</p>
          <div className="flex justify-center">
            <button className="btn-primary my-4 text-sm mx-auto bg-pink-500" type="button" onClick={handleNavigate}>Start Practice</button>
          </div>
        </div>
      </div>

      <BarLoader/>
    </>
  )
}

export default Welcome