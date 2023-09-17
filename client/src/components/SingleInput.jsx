/* eslint-disable react/prop-types */

function SingleInput({fieldName,fieldType,fieldLabel,pholder,require=false,inputChange,inputValue}) {
  return (
    <div className="flex flex-col w-full">
        <label className="label-primary text-start mb-1" htmlFor={fieldName}>{fieldLabel}</label>
        <input className="input-primary px-2 w-[100%]" type={fieldType} name={fieldName} placeholder={pholder} required={require} onChange={inputChange} value={inputValue}/>
    </div>
  )
}

export default SingleInput