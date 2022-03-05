import React, {useRef} from 'react'

export default function SearchForm() {

    const searchTextRef = useRef();
    const cathegoryRef = useRef();
    const rangeRef = useRef();
    const placeTextRef = useRef();


    let handleSubmit = e => {
        e.preventDefault();
        window.location.href = `/search?t=${searchTextRef.current.value}&c=${cathegoryRef.current.value}&r=${rangeRef.current.value}&p=${placeTextRef.current.value}`;
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="input-group">
                <input ref={searchTextRef} type="text" className="form-control" placeholder="Was suchst du?" />
                <select ref={cathegoryRef} className="form-control">
                    <option value="">Alle Kategorien</option>
                </select>
            </div>
            <div className="input-group">
                <input ref={placeTextRef} type="text" className="form-control" placeholder="PLZ oder Ort" />
                <select ref={rangeRef} className="form-control">
                    <option value="">Ganzer Ort</option>
                </select>
            </div>
            <button type="submit" className="submit-btn"><i className="icon find-icon"></i>Finden</button>
        </form>
    )
}
