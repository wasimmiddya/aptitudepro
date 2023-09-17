
function Welcome() {
  return (
    <>
      <div className='w-full flex justify-center items-center' id="img-container">
        <img className='w-[400px] md:w-[600px] hidden md:inline-block' src="https://img.freepik.com/premium-photo/vector-art-about-education-study-school_975572-3830.jpg?w=740" alt="student illustration" />
      </div>

      <div className="grid place-items-center h-full bg-[url('https://img.freepik.com/premium-photo/vector-art-about-education-study-school_975572-3830.jpg?w=740')] bg-cover bg-no-repeat bg-center md:bg-none">
        <div className="w-[80%] md:w-[55%] bg-white/90 px-4 py-3 rounded-md border border-slate-400 ">
          <h2 className="text-2xl font-semibold my-1 md:text-3xl md:my-3 text-center text-slate-700">Welcome</h2>
          <p className="text-lg break-words text-center text-slate-500">Hi there everyone, welcome to <span className="font-semibold text-pink-400">Aptitude Pro</span>. We are happy to provide you a plartform where you can practice and enhance your aptitude skills. Ofcorse in absolutely free of cost!!!</p>
          <div className="flex justify-center">
            <button className="btn-primary my-4 text-sm mx-auto bg-pink-500" type="button">Give a test</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome