/* eslint-disable react/prop-types */

// import { useState } from "react"

function Question(props) {
    const questionSet = props.data.questionSet

    return (
        <>
            <div className="px-12">
                <div>
                    <h3 className="text-xl font-semibold my-2">Question: {questionSet[props.currentNo].questionNo}</h3>
                </div>
                <div >
                    <p className="transition-all">{questionSet[props.currentNo].questionBody}</p>
                </div>
                <div className="mt-4">
                    <ul className="space-y-2">
                        <li>
                            <input type="radio" name={questionSet[props.currentNo].questionNo} className="text-pink-500 focus:ring-1 focus:ring-pink-500 cursor-pointer" />
                            <span className="mx-2">{questionSet[props.currentNo].options[0]}</span>
                        </li>
                        <li>
                            <input type="radio" name={questionSet[props.currentNo].questionNo} className="text-pink-500 focus:ring-1 focus:ring-pink-500 cursor-pointer" />
                            <span className="mx-2">{questionSet[props.currentNo].options[1]}</span>
                        </li>
                        <li>
                            <input type="radio" name={questionSet[props.currentNo].questionNo} className="text-pink-500 focus:ring-1 focus:ring-pink-500 cursor-pointer" />
                            <span className="mx-2">{questionSet[props.currentNo].options[2]}</span>
                        </li>
                        <li>
                            <input type="radio" name={questionSet[props.currentNo].questionNo} className="text-pink-500 focus:ring-1 focus:ring-pink-500 cursor-pointer" checked={true}/>
                            <span className="mx-2">{questionSet[props.currentNo].options[3]}</span>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Question