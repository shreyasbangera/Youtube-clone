import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { COMMENTS_API } from '../utils/constants'

const Comments = ({id, commentCount}) => {

  const [comments, setComments] = useState([])

  useEffect(()=>{
    fetchComments();
  },[])

  const fetchComments = async() => {
    const formattedUrl = COMMENTS_API.replace("VIDEO_ID", id)
    const res = await axios.get(formattedUrl)
    setComments(res.data.items)
    
  }
  return (
    <div className='flex flex-col gap-2'>
    <h2 className='font-normal'>{commentCount} Comments</h2>
    <input type="text" placeholder='Add a comment...' className='border-b-2 outline-none' />
    <div className='flex flex-col gap-5 mt-5'>
    {comments?.map((comment)=> {
      const {snippet} = comment
      const {topLevelComment} = snippet
      const {id} = topLevelComment
      return(
    <div className='text-sm flex flex-col' key={id}>
    <div className='font-semibold flex items-start p-2'>
    <img src ={topLevelComment.snippet.authorProfileImageUrl} alt="Profile image" className='rounded-full w-[40px] h-[40px]' />
    <div className='flex flex-col ml-3 gap-1'>
    <p>{topLevelComment.snippet.authorDisplayName}</p>
    <p className='font-normal'>{topLevelComment.snippet.textDisplay}</p>
    </div>
    </div>
    </div>
      )
  })}
   </div>
    </div>
  )
}

export default Comments