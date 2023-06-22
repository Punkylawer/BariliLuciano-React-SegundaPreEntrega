
import React, { useContext, useState } from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function ItemDetail({ id, title, categoria, descripcion, dimensiones, stock, imagen, precio }) {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, title, precio
    }

    addItem(item, quantity)
  }


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
            <div className="ItemDiv">
              {
                quantityAdded > 0 ? (
                  <Link to='/cart' className="Option">Terminar compra</Link>
                ) : ( 
              <ItemCount stock={stock} onAdd={handleOnAdd}/>
              )
              }
            </div>
        </div>
    </div>
  );
}
