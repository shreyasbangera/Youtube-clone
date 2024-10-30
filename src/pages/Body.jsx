import React from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { useSelector } from 'react-redux'


const Body = () => {
 const isSidebarOpen =useSelector(store=> store.app.isSidebarOpen)
  return (
    <div className={isSidebarOpen?'fixed flex':'flex'}>
        <Feed />     
    </div>
  )
}

export default Body