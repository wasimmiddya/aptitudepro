/* eslint-disable react/prop-types */
import { Bars } from 'react-loader-spinner'


function Spinner({load}) {
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
        <div className='overlay'></div>
    </>
  )
}

export default Spinner