import React from "react";
import './Item.css';
import { Link } from "react-router-dom";

export default function Item({ id, title, categoria, dimensiones, stock, imagen, precio}) {

        return (
        <div className="col-lg-6 col-md-12"> 
            <article className="item-card CardItem border rounded shadow-sm mt-4 mb-2"> 
                <header className="Header">
                    <h2 className="ItemHeaderTitle">
                        {title}
                    </h2>
                    <h3 className="ItemHeaderCategoria">
                        {categoria}    
                    </h3>
                    <h4 className="ItemHeaderDimensiones"> 
                        {dimensiones}
                    </h4>
                <div className="item-card_img">
                    <img src={imagen} alt={title} className="ItemImg" />
                </div>
                <section>
                    <p className="Info">
                        Precio: U$S{precio}
                    </p>
                    <p className="Info">
                        En Stock: {stock}
                    </p>
                </section>
                <footer className="ItemFooter">
                <Link to={`/Item/${id}`} className="Option">Ver Detalle</Link>
                    

                </footer>
                </header>
            </article>
        </div>
        )

}