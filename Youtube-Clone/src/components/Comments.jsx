import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { COMMENTS_API, kFormatter } from '../utils/constants'
import { BiLike, BiDislike } from "react-icons/bi";
import ReactHtmlParser from 'html-react-parser'

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

  console.log(comments)

  return (
    <div className='flex flex-col gap-2'>
    <h2 className='font-normal'>{commentCount} Comments</h2>
    <div className='flex gap-3 items-center'>
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className='w-10'  />
    <input type="text" placeholder='Add a comment...' className='border-b-2 outline-none w-full' />
    </div>
    <div className='flex flex-col gap-5 mt-5'>
    {comments?.map((comment)=> {
      const {snippet} = comment
      const {topLevelComment} = snippet
      const {id} = topLevelComment
      return(
    <div className='text-sm flex flex-col' key={id}>
    <div className='font-semibold flex items-start pt-2'>
    <img src ={topLevelComment.snippet.authorProfileImageUrl} alt="Profile" className='rounded-full w-[40px] h-[40px]' onError={(e)=> e.target.src="https://cdn-icons-png.flaticon.com/512/149/149071.png"}/>
    <div className='flex flex-col ml-3 gap-1'>
    <p>{topLevelComment.snippet.authorDisplayName}</p>
    <p className='font-normal'>{ReactHtmlParser(topLevelComment.snippet.textDisplay)}</p>
    <div className='flex gap-4 mt-2 items-center'>
      <button className='flex font-normal text-sm items-center gap-2'><BiLike size={20}/>{kFormatter(topLevelComment.snippet.likeCount)}</button>
      <button><BiDislike size={20}/></button>
      <button>Reply</button>
    </div>
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