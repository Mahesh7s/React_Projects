import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/matchesSlice";
import { Box, Text, Button } from "@chakra-ui/react";

const MatchCard = ({ match }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(state => state.matches);
  const isFav = favorites.find(m => m.id === match.id);

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Text fontWeight="bold">{match.team1} vs {match.team2}</Text>
      <Text>Venue: {match.venue}</Text>
      <Text>Date: {match.date}</Text>
      <Text>Winner: {match.winner}</Text>
      <Button mt={2} colorScheme={isFav ? "red" : "blue"} onClick={() => dispatch(toggleFavorite(match))}>
        {isFav ? "Unfavorite" : "Favorite"}
      </Button>
    </Box>
  );
};

export default MatchCard;
