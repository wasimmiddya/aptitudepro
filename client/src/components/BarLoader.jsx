/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
import { Bars } from 'react-loader-spinner'
import AppContext from '../contexts/AppContext'


function BarLoader() {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    // setLoad(false)
    const loaderID = setTimeout(() => {setLoad(false)},3500)

    return () => {
      clearTimeout(loaderID)
    }
  })

  return (
    <>
        <Bars
          height="80"
          width="80"
          color="#fb7185"
          ariaLabel="bars-loading"
          wrapperStyle={{
            position: 'fixed',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            zIndex: '1000'
          }}
        wrapperClass=""
        visible={load}
        />
        {load && <div className='overlay'></div>}
    </>
  )
}

export default BarLoader