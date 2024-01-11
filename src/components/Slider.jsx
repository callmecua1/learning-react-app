import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bestOffer from "../datas/bestoffer";

const Slider = (props) => {
  

  return (
      <div className="product-carousel-slider">
        <img src={props.image} />
        <h3 id="nameofProduct">{props.names}</h3>
        <p id="pricesofProduct">{props.price}</p>
      </div>
  );
};

export default Slider;
