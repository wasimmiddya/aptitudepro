/* eslint-disable react/prop-types */
// import React from 'react'

function Verification() {
    return (
        <div className="grid place-items-center w-full">
            <div>
                <form className="flex flex-col bg-slate-100 py-4 px-9 rounded-lg w-[70%] mx-auto shadow-md">
                    <h2 className="text-center font-bold text-2xl my-2 text-slate-700">Enter OTP</h2>
                    <p className="text-sm text-center text-slate-700">We have sent an email to your <span className="text-pink-500 font-semibold">{"example2023@gmail.com"}</span> account</p>
                    <input type="text" className="border-b-2 border-x-0 border-t-0 bg-slate-100 focus:ring-0 focus:border-pink-500 text-center p-1 w-[60%] mx-auto my-2 font-semibold text-slate-600 placeholder:font-normal" placeholder="OTP"/>
                    <div className="flex items-center">
                        <button type="submit" className="my-2 mx-auto bg-pink-500 px-4 py-1 text-white font-semibold rounded-md active:bg-pink-600">verify</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Verification