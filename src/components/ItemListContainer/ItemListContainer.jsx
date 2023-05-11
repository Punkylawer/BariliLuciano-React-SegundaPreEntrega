/* Imports */
import React, { useState, useEffect } from "react";
import { getSurfboards } from "../../data/Surfboards";
import ItemList from '../ItemList/ItemList';


    
/* Función ItemListContainer */

export default function ItemListContainer({saludo}) {
    const [surfboards, setSurfboards] = useState([]);
    
    useEffect(() => {
        getSurfboards()
            .then(response => {
                setSurfboards(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [] )

    return (
        <div>
            <ItemList surfboards={surfboards}/>
        </div>
    )
}     