/* Imports */

import React from 'react';
import { useState } from 'react';
import './ItemCount.css';

/* Funcion ItemCount */

export default function ItemCount({ stock, onAdd}) {
    
    const [count, setCount ] =useState(1);    
    
    function handleAdd() {
        if(count < stock)
        setCount(count + 1);
    }

    function handleResta() {
        if(count > 1)
        setCount(count - 1);
    }


    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="container-contador border border-primary rounded-3">
                    <div className="botones-contador d-flex align-items-center">
                        <button className='btn btn-sm btn-primary boton-resta' onClick={handleResta}>{' '} - {' '}</button>
                        <p className='p-contador' >{count}</p>
                        <button className='btn btn-sm btn-primary boton-suma' onClick={handleAdd}>{' '} + {' '}</button>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-success btn-md boton-carrito" onClick={() => onAdd(count)}>
                            Agregar al carrito
                        </button>
                    </div>
               
            </div>
        </div>
    )
}

