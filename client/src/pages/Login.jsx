import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import LogError from "../errors/LogError"
import { Oval } from "react-loader-spinner"

import AppContext from "../contexts/AppContext"

function Login() {
    const navigate = useNavigate()
    const [isError, setIsError] = useState(false)
    const [formInput, setFormInput] = useState({email: '', password: ''})
    const [disable, setDisable] = useState(false)
    const {setEmail, setUser} = useContext(AppContext)

    const handleInputChange = ({target:{name,value}}) => {
        setFormInput({...formInput,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setDisable(true)
        async function getLoggedIn(data) {
            return fetch('http://localhost:3300/login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify(data)
            })
        }

        const response = getLoggedIn(formInput)

        response
        .then(res => res.json())
        .then(({success, email, user}) => {
            if (!success) {
                setIsError(true)
                setDisable(false)
                
            } else {
                setTimeout(() => {
                    setEmail(email)
                    setUser(user)
                    navigate('/dashboard')
                }, 2000)
            }
        })
        .catch(err => {
            setIsError(true)
            setDisable(false)
            console.log(err);
        })
    }

    return (
        <>
            <div className='w-full flex justify-center items-center' id="img-container">
                <img className='w-[400px] md:w-[600px] hidden md:inline-block' src="/images/Creative thinking-bro.png" alt="student illustration" />
            </div>

            <div className="w-full md:w-full h-full flex justify-center items-center mt-10">
                <form className="mb-[50%] sm:mb-[25%] md:mb-[10%]" action="http://localhost:3300/login" method="post" onSubmit={handleSubmit}>
                    <fieldset className="border-2 rounded-md border-gray-600 inline-block p-4">
                        <legend className="px-5 py-2 border border-gray-600 rounded-md font-semibold ">LogIn</legend>
                        <div className="flex flex-col space-y-1">
                            <label className="text-slate-600 font-semibold" htmlFor="email">Email ID</label>
                            <input className=" border border-stone-900 rounded-md focus:outline focus:outline-2 focus:outline-teal-700 focus:border-none p-1" type="email" name="email" id="email" required value={formInput?.email} onChange={handleInputChange}/>
                        </div>
                        <div className="flex flex-col my-2 space-y-1">
                            <label className="text-slate-600 font-semibold" htmlFor="password">Password</label>
                            <input className=" border border-stone-900 rounded-md focus:border-none focus:outline focus:outline-2 focus:outline-teal-700 p-1" type="password" name="password" id="password" required value={formInput?.password} onChange={handleInputChange}/>
                        </div>
                        <div className="my-2">
                            <button className="px-5 py-1 mt-4 border relative left-[50%] translate-x-[-50%] rounded-md bg-teal-700 hover:bg-teal-800 border-none text-white font-semibold text-lg" type="submit" disabled={disable}>{
                                !disable  ? "LogIn":<Oval
                                height={24}
                                width={24}
                                color="#fff"
                                wrapperStyle={{
                                    padding: '1px 12px'
                                }}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#efefef"
                                strokeWidth={5}
                                strokeWidthSecondary={8}
                              />
                            }</button>
                        </div>
                    </fieldset>
                </form>
            </div>

            <LogError open={isError} close={() => setIsError(false)}/>
        </>
    )
}

export default Login