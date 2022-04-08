import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ProductListContainer from "../Products/ProductListContainer";
import "./MainDiv.css";
export default function MainDiv() {
    return (
        <>
            <div id="MainDiv">
                < ItemListContainer />
            </div>
        </>
    )
}