import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdMic } from "react-icons/io";
import { useDispatch } from "react-redux";
import { SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { search } from "../utils/appSlice";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showsuggestions, setShowSuggestions] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText) {
      dispatch(search(searchText));
      navigate("/results");
    }
  };

  const handleKeyDown=(e)=> {
    if(e.key==="Enter"){
    handleSearch(e);
    setShowSuggestions(false)
    }
    }

  const handleClick = (index) => {
    const updatedSearchText = searchSuggestions[index];
    setSearchText(updatedSearchText)
    dispatch(search(updatedSearchText));
    navigate("/results");
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  useEffect(() => {
    setTimeout(() => fetchSearchSuggestions(), 200);
  }, [searchText]);

  const fetchSearchSuggestions = async () => {
    const res = await axios.get(SEARCH_SUGGESTIONS_API + searchText);
    setSearchSuggestions(res.data[1]);
  };

  return (
    <div className="flex items-center">
      <form onSubmit={handleSearch} className="flex w-[540px] relative">
        <input
          className="flex py-1 px-4 h-10 w-full rounded-l-full border border-gray-400"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onBlur={handleBlur}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="absolute right-0 w-10 h-10 mr-12"
          onClick={() => setSearchText("")}
        >
          <RxCross2 size={22} className="text-gray-500" />
        </button>
        <button className="p-2 px-4 border border-l-0 rounded-r-full border-gray-400 bg-slate-100">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      {showsuggestions && (
        <ul className="fixed top-[52px] bg-white w-[540px] rounded-lg shadow-2xl">
          {searchSuggestions?.map((search, index) => (
            <div className="m-3" key={index}>
              <li
                className="p-1 font-semibold flex items-center gap-3 cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <AiOutlineSearch />
                {search}
              </li>
            </div>
          ))}
        </ul>
      )}
      <IoMdMic size={22} className="ml-4" />
    </div>
  );
};

export default Search;
