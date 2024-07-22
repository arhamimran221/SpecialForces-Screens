import React, { useState } from 'react'
import {Route ,Routes, useLocation} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import EnterGame from './pages/EnterGame';
import LobbyPage from './pages/LobbyPage';
import Header from './components/Header/Header';
import GunSelection from './components/GunSelection/GunSelection';
import WeaponShop from './components/WeaponShop/WeaponShop';
import WeaponSelct from './components/WeaponSelect/WeaponSelct';
import CharacterSelect from './components/CharacterSelect/CharacterSelect';

function App() {
  const location = useLocation();


  return (
    <div className='sf-container'>
    {(location.pathname=== '/enter-game' || location.pathname=== '/') ? "" :<Header/>}
     <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/enter-game" element={<EnterGame/>} />
          <Route path="/lobby" element={<LobbyPage/>} />
          <Route path="/gunselection" element={<GunSelection/>} />
          <Route path="/weapon-shop" element={<WeaponShop/>} />
          <Route path="/weapon-select" element={<WeaponSelct/>} />
          <Route path="/character-select" element={<CharacterSelect/>} />

    </Routes>
    </div>

  );
}
export default App;
