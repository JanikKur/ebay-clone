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
            <article className='author-informations'>
                <div className='author'>
                    <img src="" className='profile-image' alt={"Author Name"}/>
                    <div className='author-data'>
                        <label className='author-name'>Andreas Peterson</label>
                        <label>Privater Nutzer</label>
                        <label>Aktiv seit 24.06.2021</label>
                    </div>
                </div>
                <div className='follow-wrapper'>
                    <button className='secondary-btn'><i className='icon follow-icon'/>Folgen</button>
                </div>
            </article>
        </section>
    </main>
  )
}
