import React from "react";

const PlayerCard = ({ playerData }) => {
  return (
    <div>
      <h3>{playerData.name}</h3>
      <p>Country: {playerData.country}</p>
      <p>Searches: {playerData.searches}</p>
    </div>
  );
};

export default PlayerCard;
