import React from 'react'
import SearchForm from './SearchForm'

export default function Navigation() {
  return (
    <nav>
        <section className="content">
            <SearchForm/>
            <div className="nav-links">
                <a href="/add"><i className="icon add-icon"></i>Anzeige aufgeben</a>
                <a href="/add">Meins</a>
            </div>
        </section>
    </nav>
  )
}
