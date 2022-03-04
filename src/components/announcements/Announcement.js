import React from 'react'
import TestImg from '../../assets/images/test.bmp';
export default function Announcement({url}) {
  return (
    <a href="" className="announcement">
        <div className="announcement-image-wrapper">
            <img className="announcement-preview-img" src={TestImg}/>
            <p className="announcement-price">100€ VB</p>
        </div>
        <div className="announcement-description">
            <h3 className="announcement-title">Siemens Clinitest Rapid COViD 19 Self Test</h3>
            <label className="announcement-place">Merzig</label>
        </div>
    </a>
  )
}
