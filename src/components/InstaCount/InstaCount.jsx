import React  from "react";
import './InstaCount.css';


const  InstaCount = () => {
    return (
        <div className="container">
            <div>
                <h3>boa_surfboards</h3>
            </div>
            <div className="image-container">
                <img src="/src/assets/componenteImagen.jpg" alt="Image 1" className="image" />
                <img src="/src/assets/componenteImagen3.jpg" alt="Image 2" className="image" />
                <img src="/src/assets/componenteImagen6.jpg" alt="Image 3" className="image" />
                <img src="/src/assets/componenteImagen5.jpg" alt="Image 4" className="image" />
            </div>
            <div className="follow-container">
                <button className="follow-button">Follow us on Instagram</button>
            </div>
      </div>
    )
}

export default InstaCount