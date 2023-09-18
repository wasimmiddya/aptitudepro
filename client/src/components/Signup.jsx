import { useState } from 'react'
import SingleInput from './SingleInput'

function Signup() {
    // Initialize state to store form input values
    const [formInput, setFormInput] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    })

    // Update the formInput state when input fields change
    const handleInputChange = (e) => {

        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
        // console.log(formInput);
    }

    // Logic for handling form submission 
    const handleSubmit = (e) => {
        e.preventDefault()

        // Asynchronously send form data to the server
        async function postData() {
            // Sending POST request using fetch API to '/signup' router
            const response = await fetch('http://localhost:3300/signup', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-type": "application/json",
                },
                // The actual user information such name, email,password etc.
                body: JSON.stringify(formInput),
            })


            return response.json()
        }

        setFormInput({
            fname: '',
            lname: '',
            email: '',
            password: ''
        })
        console.log(formInput);

        // Log the response from the server
        postData().then((res) => {
            if (res !== undefined) {
                console.log(res)
            }
        })
    }

    // JSX for rendering the signup form
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
                            <SingleInput fieldName='fname' fieldType='text' fieldLabel='First Name' inputChange={handleInputChange} inputValue={formInput.fname} />
                            
                            <SingleInput fieldName='lname' fieldType='text' fieldLabel='Last Name' inputChange={handleInputChange} inputValue={formInput.lname} />
                        </div>
                        <div className='my-3'>
                            <SingleInput fieldName={'email'} fieldType={'email'} fieldLabel={'Email ID'} pholder={'@gmail.com'} require={true} inputChange={handleInputChange} inputValue={formInput.email} />
                        </div>
                        <div>
                            <SingleInput fieldName={'password'} fieldType={'password'} fieldLabel={'Password'} pholder={'*****'} require={true} inputChange={handleInputChange} inputValue={formInput.password} />
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