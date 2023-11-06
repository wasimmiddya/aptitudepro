import { useContext, useEffect } from "react"
import AppContext from "../contexts/AppContext"
import { useNavigate } from "react-router-dom"

function Dashboard() {
    const {option, email} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!email) {
            navigate('/')
        }
    })

    const handleSubmitBeginner = () => {
        option.category = "Standard"
        option.level = "beginner"
        navigate('/exam')
    }

    const handleSubmitMedium = () => {
        option.category = "Numerical Ability"
        option.level = "medium"
        navigate('/exam')
    }


    return (
        <div className="pt-26 w-full grid grid-cols-2 place-items-center">
            {/* section-1 */}
            <div className="w-[60%]">
                <div className="mt-10 shadow-lg p-8 flex flex-col items-center rounded-lg ring-1 ring-slate-100">
                    <h2 className="text-2xl font-semibold text-center text-slate-600 mb-2">Welcome!!!</h2>
                    <img src="/images/Exams-bro.png" alt="education_image" className="w-64"/>
                    <p className="text-sm text-center">Hi there, want to give test ? You can start it by choosing your difficulty level and start your exam right away, remember you will have 30 minutes.</p>
                </div>
            </div>

            {/* section-2 */}
            <div className="w-full">
                <div>
                    <div>
                        <h2 className="text-center text-3xl font-semibold text-slate-700 mb-7">Start your <span className="text-pink-500">Test Exam</span></h2>
                    </div>
                    {/* Cards container */}
                    <div className="grid grid-cols-2 grid-rows-3 gap-4 px-8 w-[80%] mx-auto">
                        {/* Cards */}
                        <div className="flex p-3 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-300 justify-evenly" onClick={handleSubmitBeginner}>
                            <div className="mr-3">
                                <h4 className="font-semibold">Beginner</h4>
                                <p>for freshers</p>
                            </div>
                            <img src="/images/beginner_madel.png" alt="broze-medal" className="w-12"/>
                        </div>
                        <div className="flex p-3 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-300 justify-evenly" onClick={handleSubmitMedium}>
                            <div className="mr-3">
                                <h4 className="font-semibold">Medium</h4>
                                <p>for regulars</p>
                            </div>
                            <img src="/images/medium_madel.png" alt="silver-medal" className="w-12"/>
                        </div>
                        <div className="flex p-3 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-300 justify-evenly">
                            <div className="mr-3">
                                <h4 className="font-semibold">Pro</h4>
                                <p>for interviews</p>
                            </div>
                            <img src="/images/pro_madel.png" alt="broze-medal" className="w-12"/>
                        </div>
                        <div className="flex p-3 bg-yellow-100 rounded-md cursor-pointer hover:bg-yellow-300 justify-evenly">
                            <div className="mr-3">
                                <h4 className="font-semibold">Quize Game</h4>
                                <p>for fun</p>
                            </div>
                            <img src="/images/game_controller.jpg" alt="broze-medal" className="w-12"/>
                        </div>
                        <div className="flex p-3 bg-green-100 rounded-md cursor-pointer hover:bg-green-300 justify-evenly">
                            <div className="mr-3">
                                <h4 className="font-semibold">Prograss</h4>
                                <p className="text-sm">check your progress</p>
                            </div>
                            <img src="/images/barchart.jpg" alt="broze-medal" className="w-12"/>
                        </div>
                        <div className="flex p-3 bg-red-100 rounded-md cursor-pointer hover:bg-red-300 justify-evenly">
                            <div className="mr-3">
                                <h4 className="font-semibold">Result</h4>
                                <p>see your last result</p>
                            </div>
                            <img src="/images/result.jpg" alt="broze-medal" className="w-12"/>
                        </div>

                    </div>
                </div>
            </div>
            {/* {modal && <Categroies closeModal={handleCloseModel}/>} */}
            
        </div>
    )
}

export default Dashboard