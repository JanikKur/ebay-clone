import React, { useState, useRef } from 'react'
import PasswordChecklist from '../components/register/PasswordChecklist';
import { checkPassword } from '../utils/checkPassword';

export default function Register() {

    const [password, setPassword] = useState('');
    const passwordInputRef = useRef();
    const [showPassword, setShowPassword] = useState(false);

    let register = e => {
        e.preventDefault();
        if(!checkPassword(password)){
            passwordInputRef.current.focus();
            return;
        }
    }



    return (
        <main>
            <section className="authenticate">
                <h2 className="title">Registrieren in 30 Sekunden</h2>
                <form onSubmit={register}>
                    <div className="form-group">
                        <label>E-Mail</label>
                        <input type="email" placeholder="E-Mail" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Passwort</label>
                        <input ref={passwordInputRef} className={` form-control ${checkPassword(password) ? '' : 'incorrect'}`} type={showPassword ? "text" : "password"} placeholder="Passwort" value={password} onChange={e => setPassword(e.target.value)} required />
                        <i className={`icon showPassword ${!showPassword ? '' : 'hide'}`} onClick={() => setShowPassword(!showPassword)}/>
                    </div>
                    <div className="form-group">
                        <label></label>
                        <PasswordChecklist password={password} />
                    </div>
                    <p>Es gelten unsere Nutzungsbedingungen. Informationen zur Verarbeitung Deiner Daten findest Du in unserer Datenschutzerklärung. </p>
                    <div className="mail-wrapper">
                        <input type="checkbox" id="mails" name="mails" /><label htmlFor="mails">Ja, zu regelmäßigen Mails von uns mit Produktinfos, Tipps, Aktionen und spannenden Geschichten über uns und mobile.de - Abmelden geht jederzeit </label>
                    </div>
                    <button type="submit" className="primary-btn">Kostenlos Registrieren</button>
                </form>
            </section>
        </main>
    )
}
