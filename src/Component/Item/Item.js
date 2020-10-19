import React from "react";

function Item({ item, handleClick }) {
  return (
    <tr>
      <td>
        <img src={item.imgSrc} style={{ width: "200px", height: "200px" }} />
      </td>
      <td>{item.name}</td>
      <td onClick={() => handleClick(item.price)}>
        click me to know the price
      </td>
    </tr>
  );
}

export default Item;
