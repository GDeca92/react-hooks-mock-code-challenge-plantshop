import React, {useState} from "react";

function PlantCard({id, name, image, price}) {
  const [stock, setStock] = useState(true)

  function handleStock(){
    setStock(prev => !prev)
  }
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick={handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
