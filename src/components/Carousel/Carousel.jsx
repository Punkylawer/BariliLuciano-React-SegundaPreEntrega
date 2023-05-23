import React, {useState} from "react";
import './Carousel.css';


export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        '/src/assets/imagen1.jpg',
        '/src/assets/imagen5.jpg',
        '/src/assets/imagen3.jpg',
        '/src/assets/imagen4.jpg'
    ];

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="carousel container-fluid">
            <div className="carousel-image" style={{width: "2080px", height: "500px"}}> 
            <img className="img-fluid" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
            <div className="carousel-buttons">
                <button className="carousel-button prev" onClick={handlePrev}>
                    &lt;
                </button>
                <button className="carousel-button next" onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );
}