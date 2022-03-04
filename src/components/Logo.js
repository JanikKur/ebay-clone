import React from 'react'
import mainLogo from '../assets/images/main-logo.png';

export default function Logo() {
  return (
    <div className="main-logo">
        <a href="/"><img src={mainLogo} alt="logo"/></a>
        <div className="logo-text-wrapper">
            <label className="logo-text">Kostenlos. </label>
            <label className="logo-text"> Einfach. </label>
            <label className="logo-text">Lokal.</label>
        </div>
    </div>
  )
}
