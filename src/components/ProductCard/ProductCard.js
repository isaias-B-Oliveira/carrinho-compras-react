import React from "react";
import propTypes from "prop-types";
import { BsFillCartPlusFill } from "react-icons/bs";
import formatCurrency from "../../util/formatCurrency";

import "./ProductCard.css";

function ProductCard({ data }) {
    const { title, thumbnail, price } = data;
    return (
        <section className="product_card">
            <img
                src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                alt="produto"
                className="card__img"
            />
            <div className="card__infos">
                <h2 className="card__price">{formatCurrency(price, "BRL")}</h2>
                <h2 className="card__title">{title}</h2>
            </div>
            <button type="button" className="button_add_car">
                <BsFillCartPlusFill />
            </button>
        </section>
    );
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;
