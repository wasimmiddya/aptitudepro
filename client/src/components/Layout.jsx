import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"


function Layout() {
    
    return (
        <>
            <header >
                <Navbar />
            </header>
            <section className={`flex-col  h-full w-full md:flex md:flex-row`}>
                <Outlet />
            </section>
            <footer className='h-16 bg-teal-700 '>
                {/* Write the footer */}
                <h2 className='text-2xl text-center text-white'>aptitudepro23@gmail.com</h2>
                <p className="text-center text-white">copyritght all right received ©</p>
            </footer>
        </>
    )
}

export default Layout