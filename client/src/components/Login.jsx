
function Login() {
    return (
        <>
            <div className='w-full flex justify-center items-center' id="img-container">
                <img className='w-[400px] md:w-[600px] hidden md:inline-block' src="/Creative thinking-bro.png" alt="student illustration" />
            </div>

            <div className="w-full md:w-full h-full flex justify-center items-center mt-10">
                <form className="mb-[50%] sm:mb-[25%] md:mb-[10%]" action="/" method="post">
                    <fieldset className="border-2 rounded-md border-gray-600 inline-block p-4">
                        <legend className="px-5 py-2 border border-gray-600 rounded-md font-semibold ">LogIn</legend>
                        <div className="flex flex-col space-y-1">
                            <label className="text-slate-600 font-semibold" htmlFor="email">Email ID</label>
                            <input className=" border border-stone-900 rounded-md focus:outline focus:outline-2 focus:outline-teal-700 focus:border-none p-1" type="email" name="email" id="email" />
                        </div>
                        <div className="flex flex-col my-2 space-y-1">
                            <label className="text-slate-600 font-semibold" htmlFor="password">Password</label>
                            <input className=" border border-stone-900 rounded-md focus:border-none focus:outline focus:outline-2 focus:outline-teal-700 p-1" type="password" name="password" id="password" />
                        </div>
                        <div className="my-2">
                            <button className="px-5 py-1 mt-4 border relative left-[50%] translate-x-[-50%] rounded-md bg-teal-700 hover:bg-teal-800 border-none text-white font-semibold text-lg" type="submit">LogIn</button>
                        </div>
                    </fieldset>
                </form>

            </div>
        </>
    )
}

export default Login