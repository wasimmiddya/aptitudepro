/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link } from "react-router-dom"
import Logout from "./modals/Logout"

function Navbar({ email }) {
    const [visible, setVisible] = useState('hidden')
    const [openModal, setOpenModal] = useState(false)

    const toggleHandler = () => {
        if (visible !== 'visible') {
            setVisible('visible')
        } else {
            setVisible('hidden')
        }
    }

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    return (
        <>
            {/* The navigation bar */}
            <nav className='flex-col justify-around bg-teal-700 py-10 md:py-4 text-white md:flex md:flex-row fixed w-full z-10'>
                {/* Navigation header container */}
                <div className='md:mt-1 flex items-center justify-between'>
                    {/* Navigation header */}
                    <h2 className='font-semibold text-2xl text-center md:text-2xl lg:text-3xl font-cursive mx-auto'>Aptitude Pro</h2>
                    {/* Menu button/icon for small screen */}
                    <i className="fa-solid fa-bars text-white right-6 top-12 p-2 hover:outline hover:outline-1 hover:outline-slate-100 rounded-md cursor-pointer md:hidden mr-8" onClick={toggleHandler}></i>
                </div>
                {/* Navigation link container */}
                <div className={`${visible} transition-all md:block`}>
                    <ul className='flex-col space-y-1 md:space-x-12 md:space-y-0 text-center my-4 md:flex md:flex-row'>
                        <li>
                            <Link className="hover:underline hover:font-semibold text-sm md:text-lg" to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:font-semibold text-sm md:text-lg" to='about'>About</Link>
                        </li>

                        {
                            !email ?
                                (<>
                                    <li>
                                        <Link className="hover:underline hover:font-semibold text-sm md:text-lg" to='login'>LogIn</Link>
                                    </li>
                                    <li>
                                        <Link className="hover:underline hover:font-semibold text-sm md:text-lg" to='signup'>SignUp</Link>
                                    </li>
                                </>
                                )
                                :
                                <>
                                    <li>
                                        <Link className="hover:underline hover:font-semibold text-sm md:text-lg" to='dashboard'>Dashboard</Link>
                                    </li>
                                    <li>
                                        <button className="hover:font-semibold hover:underline cursor-pointer text-lg" onClick={handleOpenModal}>Logout</button>
                                    </li>
                                </>
                        }

                    </ul>
                </div>
            </nav>

            {openModal && <Logout closeModal={() => setOpenModal(false)} />}
        </>
    )
}

export default Navbar