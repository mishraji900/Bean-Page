import React from 'react'

const SinglepostDetails = ({objdata}) => {
  if (!objdata) {
    // Handle case when postData is not available
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className='shadow-md shadow-slate-600 rounded-md'>
      <div>
      <div>
                <span className='text-lg lg:text-xl font-bold uppercase pl-3 font-slab '>{objdata.name}</span>
            </div>
        <img
          src={objdata.image}
          alt="encrit"
          className='rounded shadow-sm'
        />
        <div className='p-3 text-xs lg:text-sm'>
          <div>
            <span>{objdata.category}</span>
          </div>
          <div className='grid grid-rows-1 justify-items-end h-auto'>
            <div>
              <p className='text-sm lg:text-lg'>
                {objdata.blog}
              </p>
            </div>
            <div className='block' >
                <span className='text-xs text-slate-500'>date</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SinglepostDetails
