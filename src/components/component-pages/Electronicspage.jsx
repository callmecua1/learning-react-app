import bestOffer from "../../datas/bestoffer";
import { Link } from "react-router-dom";

const Electronicspages = () => {

    const filteredItems = bestOffer.filter((item) => item.categories === "electronics")

    return(
        <div className="categories-product">
      {filteredItems.map((item) => {
        return (
          <div key={item.id} className="categories-list">
            <Link to={`/categories/product/${item.id}`}>
              <div className="categories-store">
                <img src={item.IMG} alt="cheap" />
                <h3 className="product">{item.product}</h3>
                <p className="prices">{item.price}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
    )
}

export default Electronicspages