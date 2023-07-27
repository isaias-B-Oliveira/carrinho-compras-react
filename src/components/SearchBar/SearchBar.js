import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import fetchProducts from "../../api/fetchProducts";

import "./SaerchBar.css";

function SearchBar() {
    const [searchValue, setSearchValue] = useState("");

    const handlesearch = async (e) => {
        e.preventDefault();
        const products = await fetchProducts(searchValue);
        console.log(products);
        setSearchValue("");
    };

    return (
        <form className="search-bar" onSubmit={handlesearch}>
            <input
                type="search"
                value={searchValue}
                placeholder="busca produto"
                className="search__input"
                onChange={({ target }) => setSearchValue(target.value)}
                required
            />

            <button type="submit" className="search__button">
                <AiOutlineSearch />
            </button>
        </form>
    );
}

export default SearchBar;
