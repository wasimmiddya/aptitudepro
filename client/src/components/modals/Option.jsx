/* eslint-disable react/prop-types */


function Option({text,optionValue, type, selected, handleRadioChange,activeRadio}) {
    
    const isRadioSelected = (value) => selected.level === value || selected.category === value

    return (
        <div className="space-x-2 bg-pink-600 p-2 rounded-lg text-white active:bg-pink-700 cursor-pointer hover:outline-2 hover:outline-indigo-300 hover:outline" onClick={activeRadio}>
            <input type="radio" name={type} value={optionValue} onChange={handleRadioChange} checked={isRadioSelected(optionValue)} className="text-green-600 cursor-pointer w-3 h-3 checked:outline-green-600" />
            <span className="text-sm">{text}</span>
        </div>
    )
}

export default Option