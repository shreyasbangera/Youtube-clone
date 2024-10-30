import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { MdLiveTv, MdOutlineLocalFireDepartment, MdOutlineSubscriptions } from 'react-icons/md';
import { SiYoutubestudio } from 'react-icons/si';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {MdOutlineVideoLibrary } from 'react-icons/md'
import { RiHistoryFill,   } from 'react-icons/ri';
import {CiYoutube} from 'react-icons/ci'
import { IoMdTime } from 'react-icons/io'
import {BiLike} from 'react-icons/bi'
import {CgMusicNote} from 'react-icons/cg'
import {BsBag} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'

const Sidebar = () => {

  const isSidebarOpen = useSelector(store=> store.app.isSidebarOpen);

  if(!isSidebarOpen) return null; 

  return (
    <div className='fixed flex-col top-0 left-0 w-1/6 flex h-screen bg-white p-4 pt-16 shadow-2xl z-10 text-sm'>
    <ul>
    <Link to="/">
      <li className='p-3 flex gap-6 items-center rounded-lg hover:bg-gray-100 cursor-pointer'><AiFillHome size={22}/>Home</li>
      </Link>
      <li className='p-3 flex gap-6 items-center rounded-lg hover:bg-gray-100 cursor-pointer'><SiYoutubestudio size={22}/>Shorts</li>
      <li className='p-3 flex gap-6 items-center rounded-lg hover:bg-gray-100 cursor-pointer'><MdOutlineSubscriptions size={22}/>Subscriptions</li>
      </ul>
      <span className='border-b-2 p-2'></span>
      <ul>
      <li className='p-3 flex gap-6 items-center rounded-lg hover:bg-gray-100 cursor-pointer'><MdOutlineVideoLibrary size={22}/>Library</li>
      <li className='p-3 flex gap-6 items-center rounded-lg hover:bg-gray-100 cursor-pointer'><RiHistoryFill size={22}/>History</li>
      <li className='p-3 flex gap-6 items-center rounded-lg hover:bg-gray-100 cursor-pointer'><CiYoutube size={22}/>Your videos</li>
      <li className='p-3 flex gap-6 items-center rounded-lg hover:bg-gray-100 cursor-pointer'><IoMdTime size={22}/>Watch Later</li>
      <li className='p-3 flex gap-6 items-center rounded-lg hover:bg-gray-100 cursor-pointer'><BiLike size={22}/>Liked videos</li>
      </ul>
      <span className='border-b-2 p-2'></span>
      <h1 className='p-3 text-lg'>Explore</h1>
      <ul>
      <li className='p-3 flex gap-6 items-center rounded-lg hover:bg-gray-100 cursor-pointer'><MdOutlineLocalFireDepartment size={22}/>Trending</li>
      <li className='p-3 flex gap-6 items-center rounded-lg hover:bg-gray-100 cursor-pointer'><BsBag size={22}/>Shopping</li>
      <li className='p-3 flex gap-6 items-center rounded-lg hover:bg-gray-100 cursor-pointer'><CgMusicNote size={22}/>Music</li>
      <li className='p-3 flex gap-6 items-center rounded-lg hover:bg-gray-100 cursor-pointer'><SiYoutubegaming size={22}/>Gaming</li>
      <li className='p-3 flex gap-6 items-center rounded-lg hover:bg-gray-100 cursor-pointer'><MdLiveTv size={22}/>Live</li>
      <li className='p-3 flex gap-6 items-center rounded-lg hover:bg-gray-100 cursor-pointer'><BiLike size={22}/>Movies</li>
      </ul>

    </div>
  )
}

export default Sidebar