import React from "react";
import Main from "./homeSections/main/Main";
import Cards from "./homeSections/cards/Cards";
import Why from "./homeSections/why/Why";

function HomePage() {
    return (
        <div>
            <Main />
            <Cards />
            <Why />
        </div>
    );
}

export default HomePage;
