import React from 'react';
import { useState } from 'react';

export default function ItemCounter() {
    
    const [count, setCount ] =useState(1);    
    
    function handleAdd() {
        if(count < 15)
        setCount(count + 1);
    }

    function handleResta() {
        if(count > 1)
        setCount(count - 1);
    }


    return (
        <div className="container-contador">
            <div className="botones-contador">
                <button onClick={handleResta}> - </button>
                <p>{count}</p>
                <button onClick={handleAdd}> + </button>
            </div>
            <div>
                <button>
                    Agregar al carrito
                </button>
            </div>

        </div>
    )
}

//Puntos a tener en cuenta
// 1 - El contador del carrito tiene que empezar con el número 1 y tener un límite de máximo 15 unidades.
