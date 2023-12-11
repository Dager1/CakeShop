import React, { useState } from "react";

const Infofields = () => {
  const [cupcakes, setCupcakes] = useState({
    NoOfCupcake: "",
    PriceOfCupcakes: "",
  });
  return (
    <div>
      <form>
        <label>Enter the number of cup cakes</label>
        <input
          value={cupcakes.NoOfCupcake}
          onChange={(e) =>
            setCupcakes({ ...cupcakes, NoOfCupcake: e.target.value })
          }></input>
        <label>Enter the number of cup cakes</label>
        <input
          value={cupcakes.PriceOfCupcakes}
          onChange={(e) =>
            setCupcakes({ ...cupcakes, PriceOfCupcakes: e.target.value })
          }></input>
      </form>
      <h2>
        Number of cupcakes:{cupcakes.NoOfCupcake} price of cupcakes:
        {cupcakes.PriceOfCupcakes}
      </h2>
    </div>
  );
};
export default Infofields;
