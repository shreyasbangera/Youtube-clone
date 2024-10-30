import React from 'react'
import moment from 'moment/moment'
import { kFormatter } from '../utils/constants'

const VideoCard = ({info}) => {
    const{snippet, statistics} = info
    const{thumbnails, title, channelTitle, publishedAt} = snippet
    const{viewCount} = statistics 

  return (
    <div className='w-[330px] h-[330px] duration-100 hover:delay-1000 hover:scale-125  rounded-lg cursor-pointer hover:shadow-md mx-2 bg-white'>
    <img src={thumbnails.medium.url} alt="thumbnail" className='rounded-lg z-50 w-full' />
    <div className='py-3 p-2 text-[15px] font-semibold text-gray-500 leading-5'>
    <h1 className='text-[1rem] font-medium mb-[6px] line-clamp-2 text-black'>{title}</h1>
    <h2 className=' mb-1 capitalize'>{channelTitle}</h2>
    <div className='flex gap-2'>
    <p className=''>{kFormatter(viewCount)} views •</p>
    <p className=''>{moment(new Date(publishedAt)).fromNow()}</p>
    </div>
    </div>
   </div>
  )
}

export default VideoCard