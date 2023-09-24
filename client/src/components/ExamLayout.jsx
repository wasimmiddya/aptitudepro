import { useState } from "react"
import CountdownTimer from "./CountdownTimer"
import QestionNo from "./QestionNo"
import Question from "./Question"



const QustionSet = {
    "_id": {
      "$oid": "650c6c4abfdd420f194fc636"
    },
    "paperCode": "DGK153",
    "questionSet": [
      {
        "questionNo": 1,
        "questionBody": "If the ratio of the ages of A and B is 3:4 and the sum of their ages is 56, then what is the age of A?",
        "options": [
          "A) 18",
          "B) 21",
          "C) 24",
          "D) 27"
        ],
        "answere": "B) 21",
        "marks": 5
      },
      {
        "questionNo": 2,
        "questionBody": "A train covers a distance of 120 km in 2 hours. If it reduces its speed by 20 km/h, then how much time will it take to cover the same distance?",
        "options": [
          "A) 2 hours and 24 minutes",
          "B) 2 hours and 30 minutes",
          "C) 2 hours and 36 minutes",
          "D) 2 hours and 40 minutes"
        ],
        "answere": "C) 2 hours and 36 minutes",
        "marks": 5
      },
      {
        "questionNo": 3,
        "questionBody": "A bag contains 5 red balls, 4 blue balls, and 3 green balls. If one ball is drawn at random from the bag, then what is the probability that it is either red or green?",
        "options": [
          "A)1/4",
          "B)1/3",
          "C)7/12",
          "D)5/6"
        ],
        "answere": "",
        "marks": 5
      },
      {
        "questionNo": 4,
        "questionBody": "If all elephants are animals, and some animals are mammals, can it be logically assumed that some elephants are mammals?",
        "options": [
          "A) True",
          "B) False"
        ],
        "answere": "A) True",
        "marks": 5
      },
      {
        "questionNo": 5,
        "questionBody": "If a smartphone is priced at $600 after a 15% discount, what was its original price?",
        "options": [
          "A) $700",
          "B) $650",
          "C) $510",
          "D) $550"
        ],
        "answere": "C) $510",
        "marks": 5
      }
    ],
    "level": "beginner",
    "totalQuestions": 5
  }


function ExamLayout() {
    const [currentNo, setCurrentNo] = useState(0)
    const questionNo = Array.from({ length: 25 }, (v, i) => i + 1)

    const handleNextQuestion = () => {
        if (currentNo < QustionSet.totalQuestions-1) {
            setCurrentNo(preQuestion => preQuestion + 1)
        }
    }
    const handlePrevQuestion = () => {
        if (currentNo > 0) {
            setCurrentNo(preQuestion => preQuestion - 1)
        }
    }

    return (
        <div className="w-full pt-20  flex">
            {/* Righ side bar */}
            <div className="w-[20%] bg-slate-100 pt-8">
                {/* Web camera container */}
                <div className="w-[60%] h-28  mx-auto rounded-md text-center text-white">
                    <img src="http://127.0.0.1:5000/video_feed" alt="webcam" className="w-full h-full rounded-lg border-4 border-red-400" />
                </div>

                {/* Question No. plate container */}
                <div className="w-[80%] h-[65%] mx-auto my-auto border-2 border-stone-500 rounded-md mt-4 p-3 grid grid-cols-4 grid-rows-6 gap-2 ">
                    {
                        questionNo.map((e, k) =>
                            <QestionNo key={k.toString()} number={e} />
                        )
                    }
                </div>
            </div>

            {/* Exam view port */}
            <div className="w-[60%] pt-12 relative">
                {/* Actual question */}
                <Question data={QustionSet} currentNo={currentNo}/>

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