import React, { useState } from "react";

const Infofields = () => {
  const [cupcakes, setCupcakes] = useState();
  const [price, setPrice] = useState();
  return (
    <div>
      <form>
        <label>Enter the number of cup cakes</label>
        <input
          value={cupcakes}
          onChange={(e) => setCupcakes(e.target.value)}></input>
        <label>Enter the number of cup cakes</label>
        <input value={price} onChange={(e) => setPrice(e.target.value)}></input>
      </form>
      <h2>
        Number of cupcakes:{cupcakes} price of cupcakes:
        {price}
      </h2>
    </div>
  );
};
export default Infofields;
