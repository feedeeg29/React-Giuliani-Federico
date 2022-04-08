import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";

export default function Product({ id, nombre, precio, imagen, stock }) {
    return (
        <Card key={id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>${precio}</Card.Text>
                <ItemCount stock={stock} />
            </Card.Body>
        </Card>
    );
}