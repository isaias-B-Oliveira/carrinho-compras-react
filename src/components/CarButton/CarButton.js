import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./CarButton.css";

function CarButton() {
    return (
        <button type="button" className="car__button">
            <AiOutlineShoppingCart />
            <span className="car-status">1</span>
        </button>
    );
}

export default CarButton;
