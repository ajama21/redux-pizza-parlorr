import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function PizzaListItem({ fetchPizza, pizza }) {
  console.log(pizza);
  const dispatch = useDispatch();

  const deletePizza = () => {
    axios({
      method: "DELETE",
      url: `/api/pizza/${pizza.id}`,
    })
      .then((response) => {
        refreshPizza();
      })
      .catch((error) => {
        console.log("error on delete: ", error);
      });
  };

  return (
    <tr>
      <td>{pizza.name}</td>
      <td>{pizza.description}</td>
      <td>{pizza.price}</td>     
      <td>{pizza.image_path}</td>      
      <td>
        <button onClick={deletePizza}>REMOVE</button>
      </td>
    </tr>
  );
}

export default PizzaListItem;
