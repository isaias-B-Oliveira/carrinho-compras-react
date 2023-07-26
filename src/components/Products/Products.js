import React, { useState, useEffect } from "react";

import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";

function Products() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchProducts("iphone").then((res) => {
            setProduct(res);
        });
    }, []);

    return (
        <section className="products container">
            {product.map((product) => (
                <ProductCard key={product.id} data={product} />
            ))}
        </section>
    );
}

export default Products;
