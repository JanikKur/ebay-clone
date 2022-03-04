import React from 'react'

export default function SearchForm() {

    let handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Was suchst du?" />
                <select className="form-control">
                    <option value="">Alle Kategorien</option>
                </select>
            </div>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="PLZ oder Ort" />
                <select className="form-control">
                    <option value="">Ganzer Ort</option>
                </select>
            </div>
            <button type="submit" className="submit-btn"><i className="icon find-icon"></i>Finden</button>
        </form>
    )
}
