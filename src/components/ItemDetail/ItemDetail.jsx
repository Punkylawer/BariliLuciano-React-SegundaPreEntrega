
import React from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ id, title, categoria, descripcion, dimensiones, stock, imagen, precio, }) {
  return (
    <div className="d-flex flex-row item-detail-container">
        <div className="image-container">
            <img src={imagen} alt={title} className="product-image img-fluid" />
        </div>
        <div className="description-container">
            <h2 className="product-title">{title}</h2>
            <p className="product-category mt-5">Categoría: {categoria}</p>
            <p className="product-p mt-5">Descripción:</p><p className="product-descripcion"> {descripcion}</p>
            <p className="product-dimensions mt-4">Medidas: {dimensiones}</p>
            <p className="product-price">Precio: ${precio}</p>
            <ItemCount stock={stock} />
        </div>
    </div>
  );
}
