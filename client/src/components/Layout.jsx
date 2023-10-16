/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"


function Layout({email}) {
    
    return (
        <>
            <header >
                <Navbar email={email}/>
            </header>
            <section className={`flex-col  h-full w-full md:flex md:flex-row `}>
                <Outlet />
            </section>
            <footer className='h-20 bg-teal-800 flex flex-col justify-center'>
                {/* Write the footer */}
                <h2 className='text-lg text-center text-white font-semibold'>aptitudepro23@gmail.com</h2>
                <p className="text-center text-white text-xs">copyritght all right received ©</p>
            </footer>
        </>
    )
}

export default Layout