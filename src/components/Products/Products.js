import React, { useState, useEffect } from "react";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";

import "./Products.css";

function Products() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts("iphone").then((res) => {
            setProduct(res);
            setLoading(false);
        });
    }, []);

    return (
        (loading && <Loading />) || (
            <section className="products container">
                {product.map((product) => (
                    <ProductCard key={product.id} data={product} />
                ))}
            </section>
        )
    );
}

export default Products;
