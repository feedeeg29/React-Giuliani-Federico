import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";
export default function ItemListContainer() {
    return (
        <div id="ItemListContainer">
            <ItemCount stock={100} />
        </div>
    )
}