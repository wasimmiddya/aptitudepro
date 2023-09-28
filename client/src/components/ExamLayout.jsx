import { useState } from "react"
import CountdownTimer from "./CountdownTimer"
import QestionNo from "./QestionNo"
import Question from "./Question"

import QuestionSet from "./QuesModel.mjs"



function ExamLayout() {
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const questionNo = Array.from({ length: QuestionSet.questionSet.length }, (v, i) => i)

    const handleSelected = (value) => {
        QuestionSet.questionSet[currentQuestion].selected = value
        console.log(QuestionSet.questionSet);
    }

    const handleSelectedQuestionNo = (num) => {
        setCurrentQuestion(num)
    }

    const handleNextQuestion = () => {
        if (currentQuestion < QuestionSet.totalQuestions-1) {
            setCurrentQuestion(preQuestion => preQuestion + 1)
        }
    }
    const handlePrevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(preQuestion => preQuestion - 1)
        }
    }

    return (
        <div className="w-full pt-20  flex">
            {/* Righ side bar */}
            <div className="w-[20%] bg-slate-100 pt-8">
                {/* Web camera container */}
                <div className="w-[60%] h-28  mx-auto rounded-md text-center text-white">
                    {/* <img src="http://127.0.0.1:5000/video_feed" alt="webcam" className="w-full h-full rounded-lg border-4 border-red-400" /> */}
                </div>
                {/* Question No. plate container */}
                <div className="w-[80%] h-[65%] mx-auto my-auto border-2 border-stone-500 rounded-md mt-4 p-3 grid grid-cols-4 grid-rows-6 gap-2 ">
                    {
                        questionNo.map((e, k) => {
                            return(<QestionNo key={k} number={e} handleQuestionNo={handleSelectedQuestionNo}/>)
                        })
                    }
                </div>
            </div>

            {/* Exam view port */}
            <div className="w-[60%] pt-12 relative">
                {/* Actual question */}
                <Question 
                    questionData={QuestionSet.questionSet} 
                    currentQuestion={currentQuestion} 
                    optionData={QuestionSet.questionSet[currentQuestion].options}
                    handleSelected={handleSelected}
                    selected={QuestionSet.questionSet[currentQuestion].selected}
                />

                {/* Footer buttons */}
                <div className="flex px-10 justify-between border-t-2 absolute bottom-0 w-full">
                    <button className="py-1 px-3 my-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600" onClick={handlePrevQuestion}>Previous</button>
                    <button className="py-1 px-3 my-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600">Marked</button>
                    <button className="py-1 px-3 my-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600" onClick={handleNextQuestion}>Next</button>

                </div>
            </div>

            {/* Right side bar */}
            <div className="w-[20%] bg-slate-100 pt-12">
                {/* Timer container */}
                <div className="text-center">
                    <CountdownTimer />
                </div>
                {/* Profile container */}
                <div className="flex items-center flex-col mt-10">
                    <img className="rounded-full w-20 border-2 border-pink-600" src="/profile.jpg" alt="" />
                    <h4 className="text-xl font-semibold">John Doe</h4>
                    <p className="text-sm">johndoe123@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default ExamLayout