import React from 'react'
import TestImg from '../../assets/images/test.bmp';
export default function Announcement({url}) {
  return (
    <a href="/article" className="announcement">
        <div className="announcement-image-wrapper">
            <img className="announcement-preview-img" alt={"TEst"} src={TestImg}/>
            <p className="announcement-price">59.631 € VB</p>
        </div>
        <div className="announcement-description">
            <h3 className="announcement-title">Audi A5 S-line,S-tronic,Quattro,Diesel ( Details lesen )</h3>
            <label className="announcement-place">Merzig</label>
        </div>
    </a>
  )
}
