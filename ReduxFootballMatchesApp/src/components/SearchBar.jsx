import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/matchesSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <input
      placeholder="Search by team, venue, or date"
      onChange={e => dispatch(setSearchTerm(e.target.value))}
      mb={4}
    />
  );
};

export default SearchBar;