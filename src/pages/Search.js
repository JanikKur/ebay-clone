import React,{useState, useEffect} from 'react'
import AnnouncementList from '../components/announcements/AnnouncementList';

export default function Search() {

    const [searchText, setSearchText] = useState(null);
    const [cathegory, setCathegory] = useState(null);
    const [placeText, setPlaceText] = useState(null);
    const [range, setRange] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        setSearchText(searchParams.get('t'));
        setCathegory(searchParams.get('c'));
        setPlaceText(searchParams.get('p'));
        setRange(searchParams.get('r'));
    },[]);

  return (
    <main>
        <AnnouncementList/>
    </main>
  )
}
