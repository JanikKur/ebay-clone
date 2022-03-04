import React from 'react'
import Logo from '../Logo';

export default function Header() {
  return (
    <header className="main-header">
      <section className="content">
        <Logo/>
        <div className="authentication-link">
            <a href="/register" className="secondary-btn">Registrieren</a>
            <label>oder</label>
            <a href="/login" className="primary-btn"><i className="icon login-icon"></i> Einloggen</a>
        </div>
      </section>
    </header>
  )
}
