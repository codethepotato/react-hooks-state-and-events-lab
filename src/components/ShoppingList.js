import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [selected, setSelected] = useState('')
  function selectedCategory(e){
    setSelected(e.target.value)
  }
  console.log(selected)
  const filteredItemsByCategory = items.filter((item) => item.category.includes(selected))
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItemsByCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
