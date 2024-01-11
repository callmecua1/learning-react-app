import "./home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import bestOffer from "../../datas/bestoffer";
import Products from "../../components/Products";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";
import { get } from "jquery";

const Home = () => {
  //   slider effect start

  const createSlider = (bestOffer) => {
    return (
      <Slider
        key={bestOffer.id}
        image={bestOffer.IMG}
        names={bestOffer.product}
        price={bestOffer.price}
      />
    );
  };

  // const carousel = useRef();
  // const [width, setWidth] = useState(0);
  // useEffect(() => {
  //   console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // });

  //   slider effect end

  // const slideRight = () => {
  //   let nextButton = document.querySelector(".before");
  //   nextButton.scrollLeft = nextButton.scrollLeft + 235;
  //   console.log("Before");
  // };

  // const slideLeft = () => {
  //   let beforeButton = document.querySelector(".next");
  //   beforeButton.scrollLeft = beforeButton.scrollLeft - 235;
  //   console.log("Next");
  // };

  const filteredItems = bestOffer.filter((item) => item.id <= 8);


  let [scrollPosition, setScrollPosition] = useState(0);
  let stacks = document.getElementById('stacks');
  const stacksRef = useRef(null)

  let slideNext = () => {
    let newPosition = (scrollPosition += 250)
    stacksRef.current.scrollTo( {left: newPosition, behavior: 'smooth'} )
    setScrollPosition(newPosition);
  }

  let slideBefore = () => {
    let newPosition = (scrollPosition -= 250);
    stacksRef.current.scrollTo( {left: newPosition, behavior: 'smooth'} )
    setScrollPosition(newPosition);
  }



  return (
    <>
      <Navbar />

      <div className="container">
        <div className="menu-display">
          <div className="featured grid-one">
            <Link to={"/categories/furnitures"}>
              <div className="overlay">
                <img src="/src/assets/main/living-room.jpg" alt="" />
                <p>Live Comfortably</p>
              </div>
            </Link>
          </div>
          <div className="featured grid-two">
            <Link to={"/categories/skincare"}>
              <div className="overlay">
                <img src="/src/assets/main/skincare.jpg" alt="" />
                <p>Skincare</p>
              </div>
            </Link>
          </div>
          <div className="featured grid-three">
            <Link to={"/categories/kitchen"}>
              <div className="overlay">
                <img src="/src/assets/main/kitchen.jpg" alt="" />
                <p>Kitchen</p>
              </div>
            </Link>
          </div>
          <div className="featured grid-four">
            <Link to={"/categories/electronics"}>
              <div className="overlay">
                <img src="/src/assets/main/electronics.jpg" alt="" />
                <p>Electronics</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="list-product">
          <h5 id="list-product-title">Our Best Seller</h5>
          <div className="stacks">
            {filteredItems.map((item) => (
              <div key={item.id} className="product-best normal">
                <Link
                  onClick={() => window.top(0, 0)}
                  to={`/categories/product/${item.id}`}
                >
                  <div className="top-list">
                    <img src={item.IMG} alt="" />
                    <h3 className="product">{item.product}</h3>
                    <p className="prices">{item.price}$</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="highlights">
          <div className="promo">
            <div className="text">
              <h2>Creative harmonious living</h2>
              <p>
                RAOUF Products are all made to standard sizes so that you can
                mix and match them freely.
              </p>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="discount">
            <img src="/src/assets/main/vintage.jpg" alt="" />
          </div>
        </div>

        <div className="trending-products">
          <div className="product-slider">
            <h5 id="slider-title">Now Trending</h5>
            <ul>
              <button onClick={() => slideBefore()} className="before">
                Before
              </button>
              <button onClick={() => slideNext()} className="next">
                Next
              </button>
            </ul>
          </div>
          <div ref={stacksRef} className="product-carousel" id="stacks">
            {filteredItems.map((item) => {
              return (
                <Link
                  key={item.id}
                  onClick={()=>window.top(0, 0)}
                  to={`/categories/product/${item.id}`}
                >
                  <div className="product-carousel-slider">
                    <img src={item.IMG} />
                    <h3 id="nameofProduct">{item.product}</h3>
                    <p id="pricesofProduct">{item.price}$</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="advertisement wrapper">
          <div className="promo">
            <div className="text">
              <h2>Creative harmonious living</h2>
              <p>
                RAOUF Products are all made to standard sizes so that you can
                mix and match them freely.
              </p>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="discount">
            <img src="/src/assets/main/vintage.jpg" alt="cheap store" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
