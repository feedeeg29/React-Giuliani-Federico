import React from "react";
import ItemCount from "../../ItemCount/ItemCount";
const ItemDetail = ({ image, title, price }) => {
    return (
        <div >
            <img src={image} alt={title} />
            <div>
                <h2>{title}</h2>
                <h3>${price}</h3>
                <ItemCount />
            </div>
        </div>
    );
};
export default ItemDetail;