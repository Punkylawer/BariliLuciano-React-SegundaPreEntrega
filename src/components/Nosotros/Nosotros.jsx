import React, { useEffect } from 'react'

const Nosotros = () => {

    useEffect(()=> {
        window.addEventListener("click", () => {
            console.log("click")
        })
        
        window.removeEventListener
    },[])

    return (
        <div className='container'>
            <h1>Nosotros</h1>
        </div>
    )


}

