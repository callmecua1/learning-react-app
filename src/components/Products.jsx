import bestOffer from "../datas/bestoffer"

const Products = (props) => {
    return(
        <div className="top-list"  >
            <img src={props.image} alt="" />
            <h3 className="product">{props.product}</h3>
            <p className="prices">{props.prices}</p>
        </div>
    )
}

export default Products