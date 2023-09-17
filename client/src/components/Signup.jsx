import { useEffect, useState } from 'react'
import SingleInput from './SingleInput'

function Signup() {
    const [formInput, setFormInput] = useState({})


    useEffect(() => {
        // console.log(formInput);
    }, [])

    const handleInputChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        async function postData() {
            const response = await fetch('http://localhost:3300/signup', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(formInput),

            })
            return response.text()
        }

        postData().then(d=>console.log(d))

    }

    return (
        <>
            <div className='w-full flex justify-center items-center' id="img-container">
                <img className='w-[400px] md:w-[500px] hidden md:inline-block' src="/Imagination-cuate.png" alt="student illustration" />
            </div>
            <div className='h-full w-full grid place-items-center mt-10'>
                <form className='w-[80%] mx-auto md:w-[60%] h-auto' action="http://localhost:3300/signup" onSubmit={handleSubmit}>
                    <fieldset className='border-2 py-4 px-6 rounded-md' >
                        <legend className='text-left mx-6 py-2 border-2 rounded-md font-semibold font-montserrat text-slate-500 px-5'>SignUp</legend>
                        <div className='flex flex-col items-center justify-center space-y-4 w-full md:flex-row md:space-x-2 md:space-y-0'>
                            <SingleInput fieldName='fname' fieldType='text' fieldLabel='First Name' inputChange={handleInputChange} inputValue={formInput.value} />
                            <SingleInput fieldName='lname' fieldType='text' fieldLabel='Last Name' inputChange={handleInputChange} inputValue={formInput.value} />
                        </div>
                        <div className='my-3'>
                            <SingleInput fieldName={'email'} fieldType={'email'} fieldLabel={'Email ID'} pholder={'@gmail.com'} require={true} inputChange={handleInputChange} inputValue={formInput.value} />
                        </div>
                        <div>
                            <SingleInput fieldName={'password'} fieldType={'password'} fieldLabel={'Password'} pholder={'*****'} require={true} inputChange={handleInputChange} inputValue={formInput.value} />
                        </div>
                        <div className='my-6 flex justify-center'>
                            <button className='btn-primary' type="submit">SignUp</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}



export default Signup