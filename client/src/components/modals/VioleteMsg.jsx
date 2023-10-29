import ReactDOM from 'react-dom'

function VioletMsg({ closeModal }) {
  

  return ReactDOM.createPortal(
    <>
      <div className='p-6 w-[35%] shadow-md rounded-md bg-white fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] space-y-3 z-50'>
        <h3 className='text-xl font-semibold'>Violetion Detected !!!</h3>
        <p className='text-sm'>It seems that you are trying to do some malpractices. We are not able to detect your face properly. Please sit in light area and face in front your web camera.</p>
        <div className='flex justify-evenly'>
          <button className='text-white bg-red-600 px-4 py-1 rounded-md' onClick={closeModal}>OK</button>
        </div>
      </div>
      <div className='fixed left-0 right-0 top-0 bottom-0 bg-black opacity-[0.6] z-40' />
    </>,
    document.getElementById('portal')
  )
}

export default VioletMsg