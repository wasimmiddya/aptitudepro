/* eslint-disable react/prop-types */
import ReactDom from "react-dom"

function LogError({ open, close }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div style={{
                backgroundColor: 'rgba(0,0,0,.6)',
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 10
            }} />

            <div className="w-[40%]  bg-white rounded-md p-6 fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-30 space-y-2">
                <div>
                    <h3 className="text-center text-2xl font-semibold"><span className="text-red-500">Failed</span> to login!</h3>
                    <i className="fa-solid fa-rectangle-xmark cursor-pointer active:scale-[0.9] hidden md:inline" style={{ color: '#ff1a1a', position: 'absolute', top: '5%', fontSize: '28px', right: '5%' }} onClick={close}></i>
                </div>
                <p className="text-center text-sm text-slate-600 w-[75%] mx-auto">Invalid credential, you have given incorrect email id or password.Check your email and password and try it again.</p>
                <img src="log_err.png" alt="log-error-img" className="w-[65%] mx-auto"/>
                <div className="flex justify-center">
                    <button className="bg-teal-700 py-1 px-4 text-white font-semibold rounded-md active:scale-[0.9] " onClick={close}>Try Again</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default LogError