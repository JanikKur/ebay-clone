import React, {useState} from 'react'
import I1 from '../assets/images/icon-logo.png';
import I2 from '../assets/images/main-logo.png';
import I3 from '../assets/images/test.bmp';

export default function ImageGallery({ imagesOut }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [I3, I2, I1];

    let showNextImage = () =>{
        setCurrentIndex(prev => {
            return (prev + 1) % images.length
        });
    }

    let showPrevImage = () =>{
        setCurrentIndex(prev => {
            let newIndex = (prev - 1) % images.length;
            if(newIndex < 0){
                return images.length + newIndex;
            }
            return newIndex;
        });
    }

    return (
        <div className='image-gallery'>
            <button className='change-image-btn left' onClick={showPrevImage}>{"<"}</button>
            <button className='change-image-btn right' onClick={showNextImage}>{">"}</button>
            <img src={images[currentIndex]} alt={currentIndex} className='image' />
            <label className='current-index'>
                <i className='icon idx-icon'/> {currentIndex + 1} / {images.length}
            </label>
            <div className='background-img-wrapper'>
                <img src={images[currentIndex]} alt={currentIndex} />
            </div>
        </div>
    )
}
