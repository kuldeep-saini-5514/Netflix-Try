import React, { useState } from "react";
import SelectedVideo from "./SelectedVideo";

const MovieCard = ({ id, poster_path }) => {
  const [isSelected, setIsSelected] = useState(false);
  if (poster_path === null) return;
  return isSelected ? (
    <SelectedVideo
      movieId={id}
      setIsSelected={setIsSelected}
    />
  ) : (
    <div
      onClick={() => setIsSelected(true)}
      className="hover:scale-110 transition cursor-pointer flex-shrink-0 mr-5"
    >
      <img
        className="h-[60vw] w-[40vw] md:h-[19vw] md:w-[12vw] mb-1 rounded object-cover object-center"
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;
