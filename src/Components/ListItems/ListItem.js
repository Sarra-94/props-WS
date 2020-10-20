import React from "react";
import Item from "../Item/Item";
import PropTypes from "prop-types";

function ListItem({ list, children, status }) {
  //   const { y, name } = props;
  const handlePrice = (price) => {
    alert(price);
  };
  return (
    <div>
      {status ? (
        "erreur 404"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {list.map((el, i) => (
              <Item key={i} item={el} handleClick={handlePrice} />
            ))}
          </tbody>
        </table>
      )}

      {children}
    </div>
  );
}

export default ListItem;
ListItem.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};
