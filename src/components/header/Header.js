import React from 'react'
import { useUser } from '../../contexts/UserContext';
import Logo from '../Logo';

export default function Header() {

  const {currentUser, logout} = useUser();

  return (
    <header className="main-header">
      <section className="content">
        <Logo/>
        {!currentUser ?
        <div className="authentication-link">
            <a href="/register" className="secondary-btn">Registrieren</a>
            <label>oder</label>
            <a href="/login" className="primary-btn"><i className="icon login-icon"></i> Einloggen</a>
        </div> : 
        <div className="logged-in">
          <label>angemeldet als: {currentUser.email}</label>
          <a href="#" onClick={logout}>Ausloggen</a>
          <a href="/notifications"><i className="icon notification-icon"/></a>
        </div>
        }
      </section>
    </header>
  )
}
