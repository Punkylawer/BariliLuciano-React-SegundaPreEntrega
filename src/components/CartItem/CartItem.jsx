
import React from 'react';
import './CartItem.css';
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import ItemCount from '../ItemCount/ItemCount';

//import Carousel from '../Carrusel/Carrusel';



const CartItem = ({title, precio, quantity}) => {
    const { cart } = useContext(CartContext)
  const price = parseFloat(precio);
  const cantidad = parseInt(quantity);
  const subtotal = isNaN(price) || isNaN(cantidad) ? 0 : price * cantidad;
    
 


    return (
        <div className="CartItem">
        <h4>Tipo: {title}</h4>
        
        <br />
        <p><span style={{ color: 'darkgreen', fontWeight: 'bold' }}>Precio:</span> {price}</p>
        <br />
        <p><span style={{ color: 'darkgreen', fontWeight: 'bold' }}>Cantidad:</span> {cantidad}</p>
        <p><span style={{ color: 'darkgreen', fontWeight: 'bold' }}>Subtotal:</span> {subtotal}</p>
      </div>
    );
}
    export default CartItem;