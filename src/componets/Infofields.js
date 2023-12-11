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
      <table>
        <thead>
          <tr>
            <th>Number of Cupcakes</th>
            <th>Price of Cupcakes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cupCakeData.map((item, index) => (
            <tr key={index}>
              <td>{item.cupcakes}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Infofields;
