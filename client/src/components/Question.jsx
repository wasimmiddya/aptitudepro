/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {  useState } from "react"

import React from "react"

function Question({ questionData,currentQuestion,optionData,handleSelected}) {

    const [selectedRadio, setSelectedRadio] = useState({})

    const isRadioSelected = (value) => value === selectedRadio['Q'+(currentQuestion+1)]

    const handleRadioChange = ({ target: { name,value } }) => {
        handleSelected(value)
        setSelectedRadio({...selectedRadio,[name]:value})
    }

    return (
        <>
            <div className="px-12">
                <div>
                    <h3 className="text-xl font-semibold my-2">Question: {questionData[currentQuestion].questionNo}</h3>
                </div>
                <div >
                    <p className="transition-all">{questionData[currentQuestion].questionBody}</p>
                </div>
                <div className="mt-4">
                    <ul className="space-y-2">
                        {
                            optionData.map((element, key) =>
                                <React.Fragment key={key}>
                                    <li>
                                        <input type="radio" name={'Q' + (currentQuestion + 1)} value={element} className="text-pink-500 focus:ring-1 focus:ring-pink-500 cursor-pointer" onChange={handleRadioChange} checked={isRadioSelected(element)} />
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