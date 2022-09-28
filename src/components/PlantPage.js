import React, {useState, useEffect}  from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])

  function handleAddPlant(newObj){
    setPlants([...plants], newObj)
  }
  
  const displayPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant}/>
      <Search setSearch={setSearch} search={search}/>
      <PlantList plants={displayPlants}/>
    </main>
  );
}

export default PlantPage;
