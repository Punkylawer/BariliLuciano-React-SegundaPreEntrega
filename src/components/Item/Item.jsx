import React from "react";

export default function Item({ id, title, categoria, dimensiones, stock, imagen, precio}) {

        return (
            <article className="CardItem"> 
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
                <picture>
                    <img src={imagen} alt={title} className="ItemImg" />
                </picture>
                <section>
                    <p className="Info">
                        Precio: U$S{precio}
                    </p>
                    <p className="Info">
                        En Stock: {stock}
                    </p>
                </section>
                <footer className="ItemFooter">
                    <button className="Option"> Ver detalle</button>

                </footer>
                </header>
            
            
            
            
            
            
            
            
            
            
            </article>
        )

}