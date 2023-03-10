import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import { CHANNEL_API, kFormatter, VIDEO_BY_ID_API } from "../utils/constants";
import { BiLike, BiDislike, BiDotsHorizontalRounded } from "react-icons/bi";
import RelatedVideos from "../components/RelatedVideos";
import { RiShareForwardLine } from "react-icons/ri";
import {TfiDownload} from 'react-icons/tfi'

const WatchVideo = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [channel, setChannel] = useState([])


  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  const fetchVideoDetails = async () => {
    const formattedUrl = VIDEO_BY_ID_API.replace("VIDEO_ID", id);
    const res = await axios.get(formattedUrl);
    setVideoDetails(res.data.items);
      const formattedChannelUrl = CHANNEL_API.replace("CHANNEL_ID", res.data.items[0].snippet.channelId)
      const result = await axios.get(formattedChannelUrl)
      setChannel(result.data.items[0].statistics)
    }
    
    const{subscriberCount} = channel

  return (
    <div className="flex">
    <div className="px-14 py-20 w-[1000px]">
    <div className="flex w-screen">
      <iframe
        width="920px"
        height="500"
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      </div>
      {videoDetails.map((video) => {
        const { snippet, statistics} = video;
        const { title, channelTitle, publishedAt, description } = snippet;
        const { likeCount, viewCount, commentCount } = statistics;
        return (
          <div className="flex flex-col gap-3 w-[920px]" key={video.id}>
            <h1 className="text-[20px] pt-2 font-semibold">{title}</h1>
            <div className="flex items-center justify-between font-semibold">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="w-10 rounded" alt="channel logo" />
                  <span>
                  <h2 className="font-semibold">{channelTitle}</h2>
                  <h3 className="text-xs text-gray-500">{kFormatter(subscriberCount)} subscribers</h3>
                  </span>
                </div>
                <div>
                  <button className="ml-6 py-2 px-4 bg-black text-white rounded-full">
                    Subscribe
                  </button>
                </div>
              </div>
              <ul className="flex gap-2">
                <li className="flex">
                  <span className="bg-gray-100 py-2 px-4 rounded-l-full border-r-2 flex gap-2 cursor-pointer hover:bg-gray-200">
                    <span><BiLike size={22} /></span>
                    {kFormatter(likeCount)}
                  </span>
                  <span className="bg-gray-100 py-2 px-4 rounded-r-full flex gap-2 cursor-pointer hover:bg-gray-200">
                    <BiDislike size={22} />
                  </span>
                </li>
                <li className="bg-gray-100 cursor-pointer hover:bg-gray-200 py-2 px-4 rounded-full flex gap-2 items-center"><RiShareForwardLine size={22} />Share</li>
                <li className="bg-gray-100 cursor-pointer hover:bg-gray-200 py-2 px-4 rounded-full flex gap-2 items-center"><TfiDownload size={18}/>Download</li>
                <li className="bg-gray-100 cursor-pointer hover:bg-gray-200 p-2 rounded-full"><BiDotsHorizontalRounded size={22}/></li>
              </ul>
            </div>
            <div className="bg-gray-100 p-2 rounded-lg font-semibold">
              <div className="flex gap-3">
                <h1>{kFormatter(viewCount)} views</h1>
                <h2>{moment(new Date(publishedAt)).fromNow()}</h2>
              </div>
              <p className="text-sm font-normal">{description}</p>
            </div>
            <Comments id={id} commentCount={commentCount} />
          </div>
        );
      })}
    </div>
    <RelatedVideos id={id} />
    </div>
  );
};

export default WatchVideo;
