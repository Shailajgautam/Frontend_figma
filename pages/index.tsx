import Dashboard from '@/components/dashboard'
import Sidebar from '@/components/sidebar'
import Details from '@/components/details'
import React from 'react'

export const index = () => {
  return (
  <div className='flex h-screen'>
  <Sidebar/>
  <Dashboard />
  <Details />
  </div>
 

  )
}

export default index
