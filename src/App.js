import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import { UserProvider } from './contexts/UserContext';
import AddArticle from './pages/AddArticle';
import Article from './pages/Article';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';

export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header/>
        <Navigation/>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/search' element={<Search/>}/>
            <Route exact path='/article' element={<Article/>}/>
            <Route exact path='/add' element={<AddArticle/>}/>
          </Routes>
        </Router>   
        <Footer/>
      </UserProvider>
    </div>
  );
}
