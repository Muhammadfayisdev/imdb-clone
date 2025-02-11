import React from 'react'

function Pagination(props) {
    const {pageNumber,onNextPage,onPreviousPage}=props
  return (
    <div className='flex justify-center'>
        <div className='m-4 p-2 border-2 rounded-full' onClick={onPreviousPage}>Previous</div>
        <div className='m-4 p-2 border-2 rounded-full'>{pageNumber}</div>
        <div className='m-4 p-2 border-2 rounded-full' onClick={onNextPage}>Next</div>
        
    </div>
  )
}

export default Pagination

