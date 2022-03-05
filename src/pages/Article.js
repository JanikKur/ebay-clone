import React from 'react'
import ImageGallery from '../components/ImageGallery'

export default function Article() {
  return (
    <main className='article'>
        <section className='informations'>
            <ImageGallery/>
            <article className='description title'>
                <h2 className='title'>Original Tommy Damen T Shirt in xs,s und M</h2>
                <label className='price'>20 €</label>
                <label className='place'><i className='icon place-icon'/> 66113 Saarbrücken - Saarbrücken-Mitte</label>
                <label className='publishing-date'><i className='icon date-icon'/> 05.03.2022</label>
            </article>
            <article className='description details'>
                <h3 className='title'>Beschreibung</h3>
                <p>
                    Das ist eine Beschreibung
                </p>
            </article>
        </section>
        <section className='interaction'>
            <button className='primary-btn'><i className='icon message-icon'/>Nachricht Schreiben</button>
            <button className='action-btn'><i className='icon save-icon'/>Zur Merkliste hinzufügen</button>
        </section>
    </main>
  )
}
