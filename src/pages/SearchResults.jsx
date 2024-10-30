import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SEARCH_RESULTS_API } from "../utils/constants";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const searchQuery = useSelector(store=> store.app.searchQuery)

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = async () => {
    const formattedUrl = SEARCH_RESULTS_API.replace("SEARCH_QUERY", searchQuery);
    const res = await axios.get(formattedUrl);
    setSearchResults(res.data.items);
  };
  return (
    <div className="w-[1200px] py-20 mx-auto flex flex-col">
      {searchResults?.map((search) => {
        const { snippet, statistics } = search;
        const { thumbnails, title, channelTitle, publishedAt, description } = snippet;
        return (
          <Link to={`/watch/${search.id.videoId}`} className="flex mb-3" key={search.id.channelId}>
          <div className="flex justify-center items-center min-w-[360px] h-[200px]">
            <img
              src={thumbnails.medium.url}
              alt="Search video"
              className={search.id.kind==="youtube#channel"?"rounded-full mx-auto w-[136px] h=[136px]":"rounded-xl w-full"}
            />
            </div>
            <div className="ml-3">
              <h1 className="font-semibold text-sm line-clamp-2">{title}</h1>
              <p className="text-xs mt-1">{channelTitle}</p>
              <p>{description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResults;
