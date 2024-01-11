import { useState } from "react";
import { Link } from "react-router-dom";

const CategoriesHeader = () => {
  const [bntName, setbtnName] = useState("All");

  const handleCategoryClick = (categories) => {
    setbtnName(categories);
  };

  return (
    <div className="categories-header">
      <h3 id="categories-title">{bntName}</h3>
      <div className="categories-sort">
        <ul>
          <Link to={'all'}>
            <li onClick={() => handleCategoryClick("All")}>All</li>
          </Link>
          <Link to={'furnitures'}>
            <li onClick={() => handleCategoryClick("furnitures")}>
              Furnitures
            </li>
          </Link>
          <Link to={'electronics'}>
            <li onClick={() => handleCategoryClick("electronics")}>
            Electronics
          </li>
          </Link>        
          <Link to={'lamps'}>
            <li onClick={() => handleCategoryClick("lamps")}>Lamps</li>
          </Link>
          <Link to={'kitchen'}>
            <li onClick={() => handleCategoryClick("kitchen")}>Kitchen</li>
          </Link>
          <Link to={'chairs'}>
            <li onClick={() => handleCategoryClick("chairs")}>Chairs</li>
          </Link>
          <Link to={'skincare'}>
            <li onClick={() => handleCategoryClick("skincare")}>Skincare</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default CategoriesHeader;
