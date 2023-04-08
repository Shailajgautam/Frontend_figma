import React from 'react'
import searchIcon from '../assets/search icon.svg'
import notificationIcon from '../assets/notification icon.svg'
import profilePhoto from '../assets/profile photo.svg'
import dropdownIcon from '../assets/dropdown icon.svg'
import calculatorIcon from '../assets/calculator icon.svg'
import piechartIcon from '../assets/piechart icon.svg'

export const Details = () => {
  return (
    <div className='w-7/12 text-black'>
      <div className='flex justify-between'>
        <div className='pt-16 pl-6 '>
          <form className="flex flex-1 bg-dashboard-bg-clr item-center  px-3 py-1 rounded-lg ">
            <input className=" flex-1  outline-none bg-dashboard-bg-clr  " type="text" placeholder="Search" />
            <button type="submit" hidden />
            <img src={searchIcon.src} alt='search' />
          </form>
        </div>
        <div className='flex gap-x-4 '>
          <div className='pt-12'>
            <img src={notificationIcon.src} alt="notification" />
          </div>
          <div className='pt-8'>
            <img src={profilePhoto.src} alt="Photo" />
          </div>
          <div className=' pt-10 text-md text-black'>
            <h1>Jacob Frost</h1>
          </div>
          <div className=' mt-10 w-16'>
            <img src={dropdownIcon.src} alt="dropdown" className='p-1' />
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='pt-12 pl-12'>
          <p className='text-2xl'>Campaign Analytics</p>
        </div>

          <div className='hello-container flex gap-x-2 bg-dashboard-bg-clr h-8 mt-12 rounded-md pt-1 pr-10'>
            <div className='' >
              <img src={calculatorIcon.src} alt="ate" className='p-1' />
            </div>
            <div >
              Mar 10 - Apr 10
            </div>
            <div>
              <img src={dropdownIcon.src} alt="dropdown" className='p-1' />
            </div>
          </div>


      </div>
      <div className='flex pt-10 pl-12'>
        <div>
          <p>Invitations sent</p>
          <p className='text-2xl '>286</p>
        </div>
        <div className='pl-16'>
          <p>Pending Invitation</p>
          <p className='text-2xl'>12</p>
        </div>
        <div className='pl-16'>
          <p>Profile views</p>
          <p className='pl-8 text-2xl'>2891</p>
        </div>
      </div>
      <div>
        <div className=''>
          <div className='pt-12 pl-24'>
            <img src={piechartIcon.src} alt="" />
          </div>
          <div className=' flex  mt-4 pl-16'>
                        <div className='flex '>
                              <div className='bg-graph-green mt-1 w-2 h-2 rounded-md' ></div>
                              <p className='pl-2 pr-2 text-xs'>Connections</p>
                              <p></p>

                        </div>
                        <div className='flex '>
                              <div className='bg-black mt-1 w-2 h-2 rounded-md' ></div>
                              <p className='pl-2 pr-2 text-xs'>Follows</p>
                              <p></p>

                        </div>
                        <div className='flex '>
                              <div className='bg-graph-purple mt-1 w-2 h-2 rounded-md ' ></div>
                              <p className='pl-2 text-xs'>Connective Invites</p>

                        </div>
          </div>
        </div>
        <div>

        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Details