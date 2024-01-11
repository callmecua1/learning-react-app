import "./categories.css";
import Navbar from "../../components/Navbar";
import bestOffer from "../../datas/bestoffer";
import Listproduct from "../../components/Listproduct";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import CategoriesHeader from "../../components/categoriesHeader";
import CategoriesProduct from "../../components/CategoriesProduct";

import Electronicspages from "../../components/component-pages/Electronicspage";


const Categories = () => {


  return (
    <>
      <Navbar />

      <div className="container">
        <CategoriesHeader />
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Categories;
