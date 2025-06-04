import React from "react";
import { useSelector } from "react-redux";
import MatchCard from "./MatchCard";


const Favorites = () => {
  const { favorites } = useSelector(state => state.matches);

  return (
    <>
      <heading size="md" mb={4}>Favorite Matches</heading>
     
        {favorites.map(match => (
          <MatchCard key={match.id} match={match} />
        ))}
      
    </>
  );
};

export default Favorites;
