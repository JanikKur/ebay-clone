import React, {useRef} from 'react'
import { useUser } from '../contexts/UserContext'

export default function Login() {

    const { loginUser } = useUser();
    const emailRef = useRef();
    const passwordRef = useRef();

    let login = async e => {
        e.preventDefault();
        try{
            await loginUser(emailRef.current.value, passwordRef.current.value);
            window.location.href = '/';
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <main>
            <section className="authenticate login">
                <h2 className="title">Registrieren in 30 Sekunden</h2>
                <form onSubmit={login}>
                    <div className="form-group">
                        <label>E-Mail</label>
                        <input type="email" placeholder="E-Mail" className="form-control" ref={emailRef} required />
                    </div>
                    <div className="form-group">
                        <label>Passwort</label>
                        <input className={` form-control`} type="password" placeholder="Passwort" ref={passwordRef} required />
                    </div>
                    <button type="submit" className="primary-btn">Einloggen</button>
                </form>
            </section>
        </main>
    )
}
