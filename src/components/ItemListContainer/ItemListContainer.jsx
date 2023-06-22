/* Imports */
import React, { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'; 
import {useParams} from 'react-router-dom';
import './ItemListContainer.css';
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../services/firebaseConfig";

    
/* Función ItemListContainer */

export default function ItemListContainer({saludo}) {
    const [surfboards, setSurfboards] = useState([]);
    const {category} = useParams()
    
    useEffect(() => {
        const productosRef = collection(db, "surfboards");
        
        getDocs(productosRef)
            .then((resp) => {

                setSurfboards(
                    resp.docs.map((doc) => {
                        return { ...doc.data(),id: doc.id}
                    }
                    )
                )
            })
    }, [category])

    

    return (
        <div>
            <h2 className="titulo-container border border-info">Estas son algunas de nuestras tablas:</h2>
            <ItemList surfboards={surfboards}/>
        </div>
    )
}     

