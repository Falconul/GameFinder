import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import DeveloperSign from './pages/DeveloperSign';
import NavBar from './components/NavBar';
import GamePosts from './components/GamePosts';
import AddGames from './pages/AddGames';
import Library from './pages/Library';
import MyBag from './pages/MyBag';
import ViewProfile from './pages/ViewProfile';
import DeveloperFind from './pages/DeveloperFind';
import Categories from './pages/Categories';
import GameCard from './components/GameCard';
import SeeMore from './pages/SeeMore';
import Info from "./pages/Info";

function Routers() {

  return (
    
    <BrowserRouter>
    
    <NavBar/>
    <Routes>
      <Route path='/register' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addGame' element={<AddGames/>}></Route>
      <Route path='/library' element={<Library/>}></Route>
      <Route path='/bag' element={<MyBag />}></Route>
      <Route path='/view/:id' element={<ViewProfile/>}></Route>
      <Route path='/developer' element={<DeveloperSign/>}></Route>
      <Route path='/developerFind' element={<DeveloperFind/>}></Route>
      <Route path='/categories' element={<Categories/>}></Route>
      <Route path='/gameCard' element={<GameCard  />} />
      <Route path='/game/:id' element={<SeeMore/>}></Route>
      <Route path='/info' element={<Info/>}></Route>
    </Routes>

    </BrowserRouter>
   
  )
}

export default Routers