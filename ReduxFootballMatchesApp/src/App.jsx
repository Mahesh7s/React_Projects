import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMatches } from "./redux/matchesSlice";
import { Box, Heading } from "@chakra-ui/react";
import MatchList from "./components/MatchList";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Favorites from "./components/Favourites.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  return (
    <>
      <h1>Football Matches</h1>
      <SearchBar />
      <Filters />
      <MatchList />
      <Favorites />
    </>
  );
};

export default App;
