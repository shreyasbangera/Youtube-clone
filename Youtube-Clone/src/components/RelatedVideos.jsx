import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {RELATED_VIDEOS_API } from "../utils/constants";

const RelatedVideos = ({ id }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);
  useEffect(() => {
    fetchRelatedVideos();
  }, []);

  const fetchRelatedVideos = async () => {
    const formattedUrl = RELATED_VIDEOS_API.replace("VIDEO_ID", id);
    const res = await axios.get(formattedUrl);
    setRelatedVideos(res.data.items);
  };
  return (
    <div className="w-[400px] h-[90px] p-2 ml-2 pt-20">
      {relatedVideos.map((video) => {
        const { snippet,  id } = video;
        const { thumbnails, title, channelTitle} = snippet;
        return (
          <Link to ={`/watch/${id.videoId}`} className="flex mb-2" key={id.videoId}>
            <img src={thumbnails.medium.url} alt="Related video" className="w-[168px] h-[94px] rounded-lg" />
            <div className="ml-2">
              <h1 className="font-semibold text-sm line-clamp-2">{title}</h1>
              <p className="text-xs mt-1">{channelTitle}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RelatedVideos;
