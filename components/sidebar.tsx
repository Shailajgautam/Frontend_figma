import React from 'react'
import logo from '../assets/logo.svg'
import dashboardIcon from '../assets/dashboard icon.svg'
import messagesIcon from '../assets/message icon.svg'
import calendarIcon from '../assets/calendar icon.svg'
import campaignIcon from '../assets/campaign icon.svg'
import settingsIcon from '../assets/settings icon.svg'
import helpIcon from '../assets/help icon.svg'
import logoutIcon from '../assets/logout icon.svg'

export const Sidebar = () => {
      const firstGroupChildStyle = "flex pt-4 ";
      return (
            <div className="w-2/12 bg-sidebar-bg-clr text-white">

                  <div className="img_container flex justify-center pt-10">
                        <img src={logo.src} alt="you" className='w-30 drop-shadow-lg' />
                  </div>
                  <div className='flex justify-center'>
                        <div className="first_group pt-8">
                              <div className={firstGroupChildStyle}>
                                    <img src={dashboardIcon.src} alt="dashboard" />
                                    <p className='pl-4 text-text-bg-clr'>Dashboard</p>
                              </div>
                              <div className={firstGroupChildStyle}>
                                    <img src={messagesIcon.src} alt="messages" />
                                    <p className='pl-4'>Messages</p>
                              </div>
                              <div className={firstGroupChildStyle}>
                                    <img src={calendarIcon.src} alt="calendar" />
                                    <p className='pl-5'>Calendar</p>
                              </div>
                              <div className={firstGroupChildStyle}>
                                    <img src={campaignIcon.src} alt="campaign" />
                                    <p className='pl-6'>Campaign</p>
                              </div>
                        </div>
                  </div>
                  <div className='flex justify-center'>
                  <div className="second_container pt-8">
                        <div className={firstGroupChildStyle}>
                              <img src={settingsIcon.src} alt="settings" />
                              <p className='pl-4'>Settings</p>
                        </div>
                        <div className={firstGroupChildStyle}>
                              <img src={helpIcon.src} alt="help" />
                              <p className='pl-4'>Help?</p>
                        </div>
                  </div>
                  </div>

                  <div className='third_container flex justify-center pt-12'>
                        <div className=' w-3/4  p-4  ring-2 ring-text-bg-clr rounded-3xl '>
                              <p className='font-roboto'>Your free trail is about to end in </p>
                              <p className='font-roboto text-2xl'>10 days.</p>
                              <p className='text-xs pt-2 text-text-bg-clr font-sulphur-point' >You will not be billed during your free trial.</p>
                              <p className='text-xs pt-2 text-text-bg-clr font-sulphur-point'>To keep your projects running after the trial end, upgrade to a paid option.</p>
                              <div className='pt-4 flex justify-center'>
                                    <button className='ring-2 ring-text-bg-clr rounded-lg pl-6 pr-6 pt-1 pb-1 font-roboto'>
                                          Upgrade
                                    </button>
                              </div>
                        </div>
                  </div>
                  
                  <div className='flex justify-center'>
                        <div className='fourth_container pt-4 '>
                              <div className={firstGroupChildStyle} >
                                    <img src={logoutIcon.src} alt="logout" />
                                    <p className='pl-4'>Log out</p>
                              </div>
                        </div>
                  </div>
            </div>


      )
}; 
export default Sidebar