import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const plantContainer = plants.map(plant => {
    return <PlantCard key={plant.id} {...plant}/>
  })

// in return i can write it out id={plant.id} ...etc

  return (
    <ul className="cards">
      {plantContainer}
    </ul>
  );
}

export default PlantList;
