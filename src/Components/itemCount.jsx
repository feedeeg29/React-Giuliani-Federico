import { React, useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function itemCount({ stock }) {
    const notify = () => toast("agregaste" + count + "items a tu carrito");
    const [count, setCount] = useState(0);
    function add() {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    function subsTract() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    function reset() {
        if (count !== 0) {
            setCount(count - count);
        }
    }
    return (
        <>
            <Button onCLick={subsTract} variant="primary"> - </Button>
            <p>{count}</p>
            <Button onCLick={add} variant="success"> + </Button>
            <Button onCLick={notify} variant="dark"> Comprar </Button>
            <Button onClick={reset} variant="info"> Resetear </Button>
        </>
    )
};
