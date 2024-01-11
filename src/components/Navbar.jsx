import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

// navbar effect

  useEffect(()=>{
    let lastScroll = 0;
    const navigation = document.querySelector('.navbar');

    if(navigation) {
      window.addEventListener('scroll', ()=>{
        const currentScroll = window.pageYOffset;
        if((currentScroll) > 0) {
          navigation.classList.remove('sticky');
        }
        
        if((currentScroll) < lastScroll) {
          navigation.classList.add('sticky');
        }
        lastScroll = currentScroll;
      });
    }
  });

// navbar effect

  return (
    <div className="navbar sticky">
      <nav>
        <a onClick={() => navigate('/')}>
          <img src="/src/assets/logo/logo2.jpg" alt="" />
        </a>
        <ul>
          <li onClick={() => navigate("/categories/all")}>Categories</li>
          <li onClick={() => navigate("/categories/product/5")}>Product Page</li>
          <i onClick={()=> navigate("/cart")}> <img id="shopping-cart" src="/src/assets/icons/cart.png" alt="" /></i>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
