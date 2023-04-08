import React from 'react'

export const Details = () => {
  return (
    <div className='w-7/12  text-black'>
      <div className=''>
        <div className='pt-16 pl-6 '>
          <form className="flex flex-1 bg-dashboard-bg-clr item-center w-2/5 px-3 py-1 rounded-lg ">
            <input className=" flex-1  outline-none bg-dashboard-bg-clr  " type="text" placeholder="Search" />
            <button type="submit" hidden />
            <img src='' alt='search'/>
          </form>
        </div>
        <div>
          
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Details