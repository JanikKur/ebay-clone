import React from 'react'

export default function Login() {
  return (
    <main>
        <section className="authenticate login">
            <h2 className="title">Registrieren in 30 Sekunden</h2>
            <form>
                <div className="form-group">
                    <label>E-Mail</label>
                    <input type="email" placeholder="E-Mail" className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Passwort</label>
                    <input className={` form-control`} type="password" placeholder="Passwort" required />
                </div>
                <button type="submit" className="primary-btn">Einloggen</button>
            </form>
        </section>
    </main>
  )
}
