import React from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../redux/matchesSlice";


const Filters = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilters({ [e.target.name]: e.target.value }));
  };

  return (
    
    <> <select name="team" placeholder="Filter by Team" onChange={handleChange}>
        <option value="Team A">Team A</option>
        <option value="Team B">Team B</option>
      </select>
      <select name="date" placeholder="Filter by Date" onChange={handleChange}>
        <option value="2022-12-01">2022-12-01</option>
        <option value="2022-12-02">2022-12-02</option>
      </select>
      <select name="result" placeholder="Filter by Result" onChange={handleChange}>
        <option value="draw">Draw</option>
        <option value="win">Win</option>
      </select>
	  </> 
   
  );
};

export default Filters;