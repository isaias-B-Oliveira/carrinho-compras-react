import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import CarButton from "../CarButton/CarButton";

import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <SearchBar />
                <CarButton />
            </div>
        </header>
    );
}

export default Header;
