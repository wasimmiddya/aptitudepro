import ReactDOM from "react-dom"
import Option from "./Option"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import AppContext from "../contexts/AppContext"

function Categroies({ closeModal }) {
    const [selected, setSelected] = useState({ category: '', level: '' })
    const { option } = useContext(AppContext)
    const navigate = useNavigate()


    const handleRadioChange = ({ target: { name, value } }) => {
        setSelected({ ...selected, [name]: value })
    }

    const activeRadio = (option) => {
        setSelected(option)
    }

    const handleSubmit = () => {
        option.category = selected.category
        option.level = selected.level

        console.log('Option :: ', option)
        navigate('/exam')
    }

    return ReactDOM.createPortal(
        <>
            <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[45%] bg-white p-6 shadow-lg rounded-lg ring-1 space-y-5">
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold mb-3">Question categories</h2>
                        <i className="fa-solid fa-xmark mb-6 p-1 cursor-pointer hover:text-red-500 hover:scale-125" onClick={closeModal}></i>
                    </div>
                    <div className="grid grid-cols-3 gap-2">

                        <Option text={'General Knowledge'} optionValue="General Knowledge" type='category' selected={selected} handleRadioChange={handleRadioChange} activeRadio={() => activeRadio({ ...selected, 'category': 'General Knowledge' })} />
                        
                        <Option text={'Logical Reasoning'} optionValue="Logical Resoning" type='category' selected={selected} handleRadioChange={handleRadioChange} activeRadio={() => activeRadio({ ...selected, 'category': 'Logical Resoning' })} />

                        <Option text={'Numerical Ability'} optionValue="Numerical Ability" type='category' selected={selected} handleRadioChange={handleRadioChange} activeRadio={() => activeRadio({ ...selected, 'category': 'Numerical Ability' })} />

                        <Option text={'Varbal Ability'} optionValue="Grammer" type='category' selected={selected} handleRadioChange={handleRadioChange} activeRadio={() => activeRadio({ ...selected, 'category': 'Grammer' })} />

                        <Option text={'Standard'} optionValue="Standard" type='category' selected={selected} handleRadioChange={handleRadioChange} activeRadio={() => activeRadio({ ...selected, 'category': 'Standard' })} />

                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-3">Difficulty level</h2>
                    <div className="grid grid-cols-3 gap-2 w-[75%]">

                        <Option text={'Beginner'} optionValue="beginner" type='level' selected={selected} handleRadioChange={handleRadioChange} activeRadio={() => activeRadio({ ...selected, 'level': 'beginner' })} />

                        <Option text={'Medium'} optionValue="medium" type='level' selected={selected} handleRadioChange={handleRadioChange} activeRadio={() => activeRadio({ ...selected, 'level': 'medium' })} />

                        <Option text={'Difficult'} optionValue="difficult" type='level' selected={selected} handleRadioChange={handleRadioChange} activeRadio={() => activeRadio({ ...selected, 'level': 'difficult' })} />

                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="px-5 py-1 rounded-md font-semibold ring-1 hover:bg-violet-500 hover:text-white hover:ring-0 transition active:bg-violet-700" onClick={handleSubmit}>Start</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Categroies