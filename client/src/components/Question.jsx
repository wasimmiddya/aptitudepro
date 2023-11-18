import {  useContext, useState } from "react"

import React from "react"
import ExamContext from "../contexts/ExamContext"

function Question() {
    const [selectedRadio, setSelectedRadio] = useState({})
    const {currentQuestion, paper} = useContext(ExamContext)

    const {questionSet} = paper
    
    const handleRadioChange = ({ target: { name, value } }) => {
        setSelectedRadio({ ...selectedRadio, [name]: value })
        paper.questionSet[currentQuestion].selected = value
    }

    return (
        <>
            <div className="px-12">
                <div>
                    <h3 className="text-xl font-semibold my-2">Question: {questionSet[currentQuestion].questionNo}</h3>
                </div>
                <div >
                    <p className="transition-all">{questionSet[currentQuestion].questionBody}</p>
                </div>
                <div className="mt-4">
                    <ul className="space-y-2">
                        {
                            questionSet[currentQuestion].options.map((element, key) =>
                            <React.Fragment key={key}>
                                <li>
                                    <input type="radio" name={currentQuestion} value={element} className="text-pink-500 focus:ring-1 focus:ring-pink-500 cursor-pointer" onChange={handleRadioChange} checked={element === selectedRadio[currentQuestion]} />
                                    <span className="mx-2">{element}</span>
                                </li>
                            </React.Fragment>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Question