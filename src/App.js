import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ChooseArtistsForm from './components/ChooseArtistsForm/ChooseArtistsForm';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <Navigation />
        <Logo />
        <ChooseArtistsForm />
        {/*
        <FestivalList />
        <FestivalTable />

      */}
    </div>
  );
}

export default App;
