import React from 'react'
import { checkPasswordLength, checkUppercaseLetters, checkLowerCaseLetters, checkSpecialCharacters, checkminDig } from '../../utils/checkPassword'

export default function PasswordChecklist({ password }) {



    return (
        <div className="password-checklist">
            <ul>
                <li className={checkPasswordLength(password) ? "correct" : ""}><label><i className="icon" />Passwortlänge von mindestens 8 Zeichen</label></li>
                <li className={checkUppercaseLetters(password) ? "correct" : ""}><label><i className="icon" />Mindestens ein Großbuchstabe</label></li>
                <li className={checkLowerCaseLetters(password) ? "correct" : ""}><label><i className="icon" />Mindestens ein Kleinbuchstabe</label></li>
                <li className={checkSpecialCharacters(password) ? "correct" : ""}><label><i className="icon" />Mindestens ein Sonderzeichen</label></li>
                <li className={checkminDig(password) ? "correct" : ""}><label><i className="icon" />Mindestens eine Zahl</label></li>
            </ul>
        </div>
    )
}
