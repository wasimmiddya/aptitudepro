/* eslint-disable react/prop-types */

import { useState } from "react"

function Option({optionData,currentQuestion}) {
    const [selectedRadio,setSelectedRadio] = useState("A) 18")

    const isRadioSelected = (value) =>  value === selectedRadio
    
    const handleRadioChange = ({target: {value}}) => {
        setSelectedRadio(value)
    }
    
    return (
        <li>
            <input type="radio" name={'Q'+(currentQuestion+1)} value={optionData} className="text-pink-500 focus:ring-1 focus:ring-pink-500 cursor-pointer" onChange={handleRadioChange} checked={isRadioSelected(optionData)}/>
            <span className="mx-2">{optionData}</span>
        </li>
    )
}

export default Option