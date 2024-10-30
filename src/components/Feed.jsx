import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const Feed = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const res = await axios.get(YOUTUBE_VIDEO_API);
    setvideos(res.data.items);
  };
  return (
    <div className="ml-16 pt-14 px-2">
      <div>
        <ul className="flex gap-3 p-3">
          <li className="p-1 px-3 bg-gray-100 rounded-md cursor-pointer">
            All
          </li>
          <li className="p-1 px-3 bg-gray-100 rounded-md cursor-pointer">
            Gaming
          </li>
          <li className="p-1 px-3 bg-gray-100 rounded-md cursor-pointer">
            Music
          </li>
          <li className="p-1 px-3 bg-gray-100 rounded-md cursor-pointer">
            Valorant
          </li>
          <li className="p-1 px-3 bg-gray-100 rounded-md cursor-pointer">
            Comedy
          </li>
          <li className="p-1 px-3 bg-gray-100 rounded-md cursor-pointer">
            Live
          </li>
          <li className="p-1 px-3 bg-gray-100 rounded-md cursor-pointer">
            Gadgets
          </li>
        </ul>
      </div>
      <div className="py-6 flex flex-wrap gap-1 justify-around lg:justify-start">
        {videos?.map((video) => (
          <Link to={`/watch/${video.id}`} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Feed;
