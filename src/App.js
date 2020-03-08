import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import FavoriteBand from './components/FavoriteBand/FavoriteBand';
import ChooseArtistsForm from './components/ChooseArtistsForm/ChooseArtistsForm';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <Navigation />
        <Logo />
        <FavoriteBand/>
        <ChooseArtistsForm />
        {/*
        <FestivalList />
        <FestivalTable />

      */}
    </div>
  );
}

export default App;
