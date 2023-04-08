import React from 'react'

import stonksIcon from '../assets/stonks icon.svg'
import graph from '../assets/graph.svg'


function greenDiv(percent: number) {
      return (
            <div className="bg-green-div-bg text-green-div-text-clr flex px-2 rounded-lg">
                  <img src={stonksIcon.src} alt="stonks" />
                  <p className='text-sm p-1'>{percent}%</p>
            </div>
      );
}

export const Dashboard = () => {
      const hrStyle = ' mx-auto border';
      return (
            <div className='w-4/12 bg-dashboard-bg-clr text-black' >
                  <div className=' pl-14 pt-12'>
                        <p className=' text-3xl'>Dashboard</p>
                  </div>
                  <div>
                        <div className='connections_container pb-3 w-9/12 mx-auto'>
                              <p className='pt-16'>Connections</p>
                              <div className='text-2xl flex justify-between mb-2'>
                                    <p className=''>2635</p>
                                    {greenDiv(56)}
                              </div>
                              <hr className={hrStyle} />
                        </div>
                        
                        <div className='followers_container pb-3 w-9/12 mx-auto'>
                              <p className=''>Followers</p>
                              <div className='text-2xl flex justify-between mb-2'>
                                    <p className=''>2667</p>
                                    {greenDiv(0)}
                              </div>
                              <hr className={hrStyle}/>
                        </div>
                        <div className='connect_container pb-3 w-9/12 mx-auto'>
                              <p className=''>Connect Invites</p>
                              <div className='text-2xl flex justify-between mb-2'>
                                    <p className=''>100</p>
                                    {greenDiv(60)}
                              </div>
                        </div>

                  </div>
                  <div className='flex justify-center    '>
                        <img src={graph.src} alt="Graph" className=''/>

                  </div>
                  <div className=' flex justify-center pt-4'>
                        <div className='flex '>
                              <div className='bg-graph-green mt-1 w-4 h-4 rounded-md' ></div>
                              <p className='pl-2 pr-2'>Connections</p>

                        </div>
                        <div className='flex '>
                              <div className='bg-black mt-1 w-4 h-4 rounded-md' ></div>
                              <p className='pl-2 pr-2'>Follows</p>

                        </div>
                        <div className='flex '>
                              <div className='bg-graph-purple mt-1 w-4 h-4 rounded-md ' ></div>
                              <p className='pl-2'>Connective Invites</p>

                        </div>

                  </div>

            </div>


      )
};

export default Dashboard
