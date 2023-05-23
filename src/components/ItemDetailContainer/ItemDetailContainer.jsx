import React, { useState, useEffect } from "react";
import { getSurfboardById } from "../../data/Surfboards.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
 import {useParams} from 'react-router-dom';


 export default function ItemDetailContainer() {
    const [surfboards, setSurfboards] = useState(null)

    const {itemId} = useParams()


    useEffect(() => {
        getSurfboardById(parseInt(itemId))
            .then(response => {
                setSurfboards(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...surfboards}/>
        </div>
    )
}