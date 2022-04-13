import React from "react";
import ItemCount from "../../ItemCount/ItemCount";

const ItemDetail = ({ id, image, title, price, stock }) => {
    return (
        <div className={id}>
            <img src={image} alt={title} />
            <div>
                <h2>{title}</h2>
                <h3>${price}</h3>
                <ItemCount stock={stock} />
            </div>
        </div>
    );
};
export default ItemDetail;