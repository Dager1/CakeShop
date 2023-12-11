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
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ border: "1px solid black" }}>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Number of Cupcakes
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Price of Cupcakes
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {cupCakeData.map((item, index) => (
            <tr key={index} style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {item.cupcakes}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {item.price}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
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
