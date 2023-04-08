import React from 'react'
import searchIcon from '../assets/search icon.svg'
import notificationIcon from '../assets/notification icon.svg'
import profilePhoto from '../assets/profile photo.svg'
import dropdownIcon from '../assets/dropdown icon.svg'
import calculatorIcon from '../assets/calculator icon.svg'
import piechartIcon from '../assets/piechart icon.svg'
import activityPerson1 from '../assets/activity person 1.svg'
import activityPerson2 from '../assets/activity person 2.svg'
import activityPerson3 from '../assets/activity person 3.svg'
import chart from '../assets/chart.svg'


export const Details = () => {
  return (
    <div className='w-7/12 text-black'>
      <div className='flex justify-between'>
        <div className='pt-14 pl-6 '>
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
            <h1 className='font-sulphur-point'>Jacob Frost</h1>
          </div>
          <div className=' mt-10 w-16'>
            <img src={dropdownIcon.src} alt="dropdown" className='p-1' />
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='pt-10 pl-12'>
          <p className='text-2xl font-sulphur-point'>Campaign Analytics</p>
        </div>

        <div className='hello-container flex gap-x-2 bg-dashboard-bg-clr h-8 mt-10 rounded-md pt-1 mr-10'>
          <div className='' >
            <img src={calculatorIcon.src} alt="ate" className='p-1' />
          </div>
          <p className='font-sulphur-point' >
            Mar 10 - Apr 10
          </p>
          <div>
            <img src={dropdownIcon.src} alt="dropdown" className='p-1' />
          </div>
        </div>


      </div>
      <div className='flex pt-8 pl-12'>
        <div>
          <p className='text-text-clr font-sulphur-point'>Invitations sent</p>
          <p className='text-2xl font-rubik '>286</p>
        </div>
        <div className='pl-24'>
          <p className='text-text-clr font-sulphur-point'>Pending Invitation</p>
          <p className='text-2xl font-rubik'>12</p>
        </div>
        <div className='pl-24'>
          <p className='text-text-clr font-sulphur-point'>Profile views</p>
          <p className=' text-2xl font-rubik'>2891</p>
        </div>
      </div>
      <div className='flex  w-9/12 mx-auto justify-between pt-12'>
        <div className=''>
          <img src={piechartIcon.src} alt="Piechart" className='w-48 ' />
        </div>
        <div>
          <img src={chart.src} alt="graph" className='w-52' />
        </div>
      </div>
      <div className='flex justify-between '>
        <div className=' flex gap-x-3 mt-4 pl-14'>
          <div>
            <div className='flex' >
              <div className='bg-black flex mt-1 w-2 h-2 rounded-md' ></div>
              <p className='text-xs pl-3 font-roboto text-text-clr '>Invitations sent</p>
            </div>
            <div className='flex justify-center text-xs'>
              <p className='font-rubik'>286</p>
            </div>
          </div>
          <div>
            <div className='flex' >
              <div className='bg-graph-green flex mt-1 w-2 h-2 rounded-md' ></div>
              <p className='text-xs pl-3 font-roboto text-text-clr'>Pending inivitations</p>
            </div>
            <div className='flex justify-center text-xs font-rubik'>
              <p >12</p>
            </div>
          </div>
          <div>
            <div className='flex' >
              <div className='bg-graph-purple flex mt-1 w-2 h-2 rounded-md' ></div>
              <p className='text-xs pl-3 font-roboto text-text-clr'>Profile views</p>
            </div>
            <div className='flex justify-center text-xs'>
              <p className='font-rubik'>2891</p>
            </div>
          </div>


        </div>
        <div className='flex gap-x-4 pt-4 pr-28'>
          <div className=''>
            <div className='flex' >
              <div className='bg-graph-green flex mt-1 w-2 h-2 rounded-md' ></div>
              <p className='text-xs pl-3 font-roboto text-text-clr'>Campaign 1</p>
            </div>
            <div className='flex justify-center text-xs'>
              <p className='font-rubik' >12,423</p>
            </div>
          </div>
          <div>
            <div className='flex ' >
              <div className='bg-graph-purple flex mt-1 w-2 h-2 rounded-md' ></div>
              <p className='text-xs pl-3 font-roboto text-text-clr'>Campaign 2</p>
            </div>
            <div className='flex justify-center text-xs font-Rubik'>
              <p className='font-rubik' >12,423</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between font-sulphur-point'>
        <div className='pt-8 pl-12'>
          <p className='text-2xl py-4'>Recent Activity</p>
        </div>

        <div className='flex gap-x-2 bg-dashboard-bg-clr mt-10 h-8 p-2 rounded-md pt-1 mr-10'>
          <div>
            Last 24h
          </div>
          <div>
            <img src={dropdownIcon.src} alt="dropdown" className='p-1' />
          </div>
        </div>
      </div>
      <div className="text-black flex px-2 rounded-lg py-1 font-sulphur-point">
                <img src={activityPerson1.src} alt="stonks" />
                <p className=' p-1'><b>Alex Morgan</b> sent you a <b>message</b></p>
      </div>
      <hr className='py-1'/>
      <div className="text-black flex px-2 rounded-lg py-1 font-sulphur-point">
                <img src={activityPerson2.src} alt="stonks" />
                <p className=' p-1'><b>Mujo Prosper</b> sent you a <b>connection request</b></p>
      </div>
      <hr className='py-1'/>
      <div className="text-black flex px-2 rounded-lg py-1 font-sulphur-point">
                <img src={activityPerson3.src} alt="stonks" />
                <p className='p-1'>Upcoming Task - <b>Create a campaign for designers</b> due on 02/04/2023</p>
      </div>
    </div>
  )
}

export default Details