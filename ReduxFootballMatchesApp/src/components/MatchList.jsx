import React from "react";
import { useSelector } from "react-redux";
import MatchCard from "./MatchCard";
import { Spinner, Grid } from "@chakra-ui/react";

const MatchList = () => {
  const { isLoading, footballMatches } = useSelector(state => state.matches);

  if (isLoading) return <Spinner size="xl" />;

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
      {footballMatches.map((match, i) => (
        <MatchCard key={i} match={match} />
      ))}
    </Grid>
  );
};

export default MatchList;
