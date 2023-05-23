/* Imports */
import React, { useState, useEffect } from "react";
import { getSurfboards } from "../../data/Surfboards";
import ItemList from '../ItemList/ItemList';
import { getSurfboardByCategory } from "../../data/Surfboards"; 
import {useParams} from 'react-router-dom';
import './ItemListContainer.css';

    
/* Función ItemListContainer */

export default function ItemListContainer({saludo}) {
    const [surfboards, setSurfboards] = useState([]);
    const {category} = useParams()
    
    useEffect(() => {
        const asyncFunc = category ? getSurfboardByCategory : getSurfboards

        asyncFunc(category)
            .then(response => {
                setSurfboards(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [category])

    

    return (
        <div>
            <h2 className="titulo-container border border-info">Estas son algunas de nuestras tablas:</h2>
            <ItemList surfboards={surfboards}/>
        </div>
    )
}     

