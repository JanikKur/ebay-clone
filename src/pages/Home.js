import React from 'react'
import AnnouncementList from '../components/announcements/AnnouncementList'
import CathegoryList from '../components/cathegories/CathegoryList'

export default function Home() {
  return (
    <main className="home">
      <CathegoryList/>
      <AnnouncementList/>
    </main>
  )
}
