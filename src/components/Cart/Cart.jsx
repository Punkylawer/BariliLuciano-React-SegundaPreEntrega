import './Cart.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from '../CartItem/CartItem';
import Carousel from '../Carousel/Carousel';

const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext)
    const total =  cart.reduce((accumulator, item) => accumulator + item.precio *  item.quantity, 0);

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }


 
    return (
        <div className="cart-container">
            <div className="cart-items">
                {cart.map((p) => (
                <CartItem key={p.id} {...p} />
                ))}
            </div>
            <div className="cart-summary">
                <h3 className="cart-total">Total: {total}</h3>
                <button onClick={() => clearCart()} className="cart-button">
                Limpiar carrito
                </button>
                <Link to="/checkout" className="cart-link">
                Checkout
                </Link>
            </div>
        </div>
    )
} 
export default Cart;