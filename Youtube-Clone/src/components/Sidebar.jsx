import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { SiYoutubestudio } from 'react-icons/si';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isSidebarOpen = useSelector(store=> store.app.isSidebarOpen);

  if(!isSidebarOpen) return null; 

  return (
    <div className='fixed flex-col top-0 left-0 w-1/6 flex h-screen bg-white p-4 pt-16 shadow-2xl z-10'>
    <ul>
    <Link to="/">
      <li className='p-3 flex gap-4 items-center'><AiFillHome size={22}/>Home</li>
      </Link>
      <li className='p-3 flex gap-4 items-center'><SiYoutubestudio size={22}/>Shorts</li>
      <li className='p-3 flex gap-4 items-center'><MdOutlineSubscriptions size={22}/>Subscriptions</li>
      </ul>
      <span className='border-b-2'></span>
      <ul>
      <li className='p-3 flex gap-4 items-center'>Library</li>
      <li className='p-3 flex gap-4 items-center'>History</li>
      <li className='p-3 flex gap-4 items-center'>Your videos</li>
      <li className='p-3 flex gap-4 items-center'>Watch Later</li>
      <li className='p-3 flex gap-4 items-center'>Liked videos</li>
      </ul>

    </div>
  )
}

export default Sidebar