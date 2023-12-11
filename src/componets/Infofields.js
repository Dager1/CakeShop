import React, { useState } from "react";

const Infofields = () => {
  const [cupcakes, setCupcakes] = useState("");
  const [price, setPrice] = useState("");
  const [cupCakeData, setCupCakeData] = useState([]);

  const handleAdd = () => {
    const newCupCakeData = [...cupCakeData, { cupcakes, price }];
    setCupCakeData(newCupCakeData);
    setCupcakes("");
    setPrice("");
  };

  const handleDelete = (index) => {
    const updatedCupCakeData = cupCakeData.filter((item, i) => i !== index);
    setCupCakeData(updatedCupCakeData);
  };

  return (
    <div>
      <form>
        <label>Enter the number of cupcakes:</label>
        <input value={cupcakes} onChange={(e) => setCupcakes(e.target.value)} />
        <label>Enter the price of cupcakes:</label>
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </form>
      <h2>Cupcakes and Prices:</h2>
      <ul>
        {cupCakeData.map((item, index) => (
          <li key={index}>
            Number of cupcakes: {item.cupcakes} | Price of cupcakes:{" "}
            {item.price}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Infofields;
