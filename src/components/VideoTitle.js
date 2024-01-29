import React from "react";
import { useSelector } from "react-redux";
const VideoTitle = () => {
  const mainMovie = useSelector((store) => store.movies.nowplaying);
 const movies = mainMovie && mainMovie[0]
 console.log(movies);

  
 
  
  return (
    <>
      <div
        id="Banner"
        className="absolute bg-gradient-to-r from-black top-0 pl-[3rem] text-white w-screen h-[51rem] flex flex-col justify-center gap-5 aspect-video"
      >
        {/* <h1 className="font-bold text-6xl">{original_title || title || name}</h1> */}
        {/* <h1 className="w-[900px] ">{movies.title}</h1> */}
        <div>
          <button className="h-[50px] w-[170px] bg-LightRed hover:bg-DarkRed rounded-2xl">
            Watch Now
          </button>
          <button className="h-[50px] w-[170px] bg-LightBlack rounded-2xl hover:text-black  border-2 hover:border-2 hover:border-LightRed ml-10 hover:bg-white">
            View Trailer
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;