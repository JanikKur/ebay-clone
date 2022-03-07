import React from 'react'

export default function AddArticle() {
  return (
    <main>

        <section className="form-group">
            <h3 className="title">Anzeigendetails</h3>
            <div className="input-group">
                <label>Titel</label>
                <input type="text" className="form-control"/>
            </div>
        </section>
        <section className="form-group">
            <h3 className="title">Ort</h3>
        </section>
        <section className="form-group">
            <h3 className="title">Deine Angaben</h3>
        </section>
        <section className="form-group">
            <h3 className="title">Veröffentliche deine Anzeige</h3>
        </section>
    </main>
  )
}
