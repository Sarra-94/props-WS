import React from "react";
import Item from "../Item/Item";
// import propTypes
import PropTypes from "prop-types";

function ListItem({ items, name, children }) {
  // destructuring methode 1
  //   const { items, name } = props;
  const handlePrice = (price) => {
    alert(price);
  };
  return (
    <div>
      <h2>List Item component</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((el, i) => (
            <Item key={i} item={el} handleClick={handlePrice} />
          ))}
        </tbody>
      </table>
      {children}
    </div>
  );
}

export default ListItem;
ListItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
ListItem.defaultProps = {
  items: [
    {
      imgSrc: `nthg`,
      name: "undefined",
      price: `0`,
    },
  ],
};
