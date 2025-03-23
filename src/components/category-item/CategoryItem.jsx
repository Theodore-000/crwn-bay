import React from "react";

const CategoryItem = ({ id, title, image }) => {
  return (
    <div key={id}>
      <div>
        <img src={image} alt="" className="w-28 h-28 object-cover"/>
      </div>

      <div>
        <h1>{title}</h1>
        <h1>Shop Now</h1>
      </div>
    </div>
  );
};

export default CategoryItem;
