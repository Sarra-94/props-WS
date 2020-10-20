import React from "react";
import PropTypes from "prop-types";

function Item({ item, handleClick }) {
  return (
    <tr>
      <td>
        <img src={item.imgSrc} alt={item.name} width="200px" />
      </td>
      <td>{item.name}</td>
      <td onClick={() => handleClick(item.price)}>
        click me to know the price
      </td>
    </tr>
  );
}

export default Item;
Item.propTypes = {
  item: PropTypes.object,
  handleClick: PropTypes.func,
};
Item.defaultProps = {
  item: {
    imgSrc: "notfound",
    name: "inconnu",
    price: 0,
  },
};
