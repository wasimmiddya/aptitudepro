// import React from 'react'

function PageNotFound() {
  return (
    <div className="grid place-items-center w-full pt-24 bg-slate-50">
        <div className="py-10 px-24 shadow-xl flex flex-col items-center rounded-xl bg-white">
            <h1 className="text-3xl font-semibold mb-2 animate-bounce">404 Page Not Found!</h1>
            <p className="animate-bounce">May be you put a wrong url</p>
            <img className="w-72" src="/images/404.png" alt="404-image" />
        </div>
    </div>
  )
}

export default PageNotFound