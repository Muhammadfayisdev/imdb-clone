import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[60vh] sm:h-[40vh] bg-center bg-no-repeat bg-cover flex items-end m-4' style={{backgroundImage:`url(https://i.ytimg.com/vi/iqc9C7DtDOE/maxresdefault.jpg)`}}>
         <div className='text-xl md:text-3xl  bg-opacity-60 text-black text-center p-4 w-full'>
            Marco
         </div>
    </div>
  )
}

export default Banner