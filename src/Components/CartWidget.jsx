import React from "react";
import Cart from ".//Cart.png";
import './Cart.css';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function CartWidget() {
    const notify = () => toast("Muchas Gracias, vuelva prontos");
    return (
        <>
            <>
                <button onClick={notify}>
                    <img src={Cart} alt="" width="50px" className="Cart" />
                </button>
            </>
        </>
    )

}