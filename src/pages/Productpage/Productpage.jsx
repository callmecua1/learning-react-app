import "./productpage.css";
// import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import bestOffer from "../../datas/bestoffer";
// import Slider from "../../components/Slider";
import { useEffect, useRef, useState, createContext, useContext } from "react";
import { Link, useParams } from "react-router-dom";
// import Slider from "../../components/Slider";

export const CartContext = createContext();

const Productpage = () => {
  const { id } = useParams();
  const { addtoCart } = useContext(CartContext);
  const items = bestOffer.find((item) => item.id === parseInt(id));

  const silder = bestOffer.filter((slide) => slide.id);

  // const createSlider = (bestOffer) => {
  //   return (
  //     <Slider
  //       key={bestOffer.id}
  //       image={bestOffer.IMG}
  //       names={bestOffer.product}
  //       price={bestOffer.price}
  //     />
  //   );
  // };

  // const productpage = useRef();
  // const [width, setWidth] = useState(0);
  // useEffect(() => {
  //   setWidth(productpage.current.scrollWidth - productpage.current.offsetWidth);
  // });

  const [cart, setCart] = useState([]);

  let [scrollPosition, setScrollPosition] = useState(0);
  let scroll = document.getElementById("product-slide-carousel");
  const scrollRef = useRef(null);

  let nextBtn = () => {
    let newPosition = (scrollPosition += 250);
    scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
    setScrollPosition(newPosition);
  };

  let beforeBtn = () => {
    let newPosition = (scrollPosition -= 250);
    scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
    setScrollPosition(newPosition);
  };

  const [quantity, setQuantity] = useState(1)
  const [priceItem, setPriceItem] = useState(items.price)

  const increase = () => {
    if(quantity >= 1) {
      const updateQuantity = quantity + 1
      setQuantity(updateQuantity)
      setPriceItem(updateQuantity * items.price)
    }
  }

  const decrease = () => {
    const updateQuantity = quantity - 1
    if(updateQuantity >= 1) {
      setQuantity(updateQuantity)
      setPriceItem(prevpriceItem => prevpriceItem - items.price)
    } else {
      setQuantity(1)
      setPriceItem(items.price)
    }
  }


  const calcPrice = (quantity) => {
    return quantity * items.price
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="main-page">
          <h3>{items.product}</h3>
          <div className="main-page-product">
            <img src={items.IMG} alt="red" />
          </div>
          <div className="main-page-price">
            <p id="product-description">{items.description}</p>
            <div className="main-page-price-button">
              <p id="quantity">Quantity</p>
              <div className="price-button">
                <button onClick={()=>decrease()}>-</button>
                <p>{quantity}</p>
                <button onClick={()=>increase()}>+</button>
              </div>
              <p id="prices">{priceItem}$</p>
            </div>
            <div className="cart">
              <button id="addCart">Add to Cart</button>
              <button id="direct-buy">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="product-specs wrapper">
          <div className="product-specs-block">
            <div className="product-texture specs">
              <h3>Texture :</h3>
              <p>Wood</p>
            </div>
            <div className="product-weight specs">
              <h3>Weight :</h3>
              <p>10 kg</p>
            </div>
            <div className="product-size specs">
              <h3>Size :</h3>
              <p>60cm x 20cm</p>
            </div>
          </div>
        </div>

        <div className="trending-product-page">
          <div className="product-page-slider">
            <h5 id="product-page-title">Now Trending</h5>
            <ul>
              <button onClick={() => beforeBtn()}>Before</button>
              <button onClick={() => nextBtn()}>Next</button>
            </ul>
          </div>

          <div ref={scrollRef} className="product-page-carousel" id="product-slide-carousel">
            {silder.map((slide) => {
              return (
                <Link
                  key={slide.id}
                  onClick={() => window.top(0, 0)}
                  to={`/categories/product/${slide.id}`}
                >
                  <div className="product-carousel-slider">
                    <img src={slide.IMG} />
                    <h3 id="nameofProduct">{slide.product}</h3>
                    <p id="pricesofProduct">{slide.price}$</p>
                  </div>
                </Link>
                // <Link
                //   onClick={() => window.top(0, 0)}
                //   to={`/categories/product/${slide.id}`}
                // >
                // </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Productpage;

// const [image, setImage] = useState(bestOffer[8].IMG);
// const { id } = useParams();
// const item = bestOffer.filter((item) => item.id === parseInt(id));
// const { addtoCart } = useContext(CartContext);
// const stuff  = bestOffer.filter((item) => item.id === parseInt(id));

//  const [product] = useState([bestOffer]);

//  const testing = () =>{
//     console.log("its worked")
//  }

//  const addtoCart = (product) => {
//     setCart([...cart, product])
//     console.log(cart)
//     alert("Item has been added to cart")
//  }
// const items = bestOffer.filter((item) => item.id === parseInt(id))
