import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [shopping, setShopping] = useState(false)
  function groceries() {
    setShopping(!shopping)
  }

  return (
    <li className={shopping ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className="add"
        onClick={groceries}>
        {shopping ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
