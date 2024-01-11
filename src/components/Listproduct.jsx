import { Link } from "react-router-dom";
import bestOffer from "../datas/bestoffer";


const Listproduct = (props) => {
    
  const setclick = () => {
    alert("its worked");
  };

  const items = bestOffer.find((item) => item)

  return (
    <Link
      onClick={()=>window.top(0, 0)}
      to={`/categories/product/${items.id}`}
    >
      <div key={items.id} className="categories-store">
          <img src={props.img} alt="cheap" />
          <h3 className="product">{props.products}</h3>
          <p className="prices">{props.price}</p>
        </div>
    </Link>
  );
};

export default Listproduct;
