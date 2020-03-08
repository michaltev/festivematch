import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import FavoriteBand from './components/FavoriteBand/FavoriteBand';
import ChooseArtistsForm from './components/ChooseArtistsForm/ChooseArtistsForm';
import './App.css';

const particlesParams = {
  particles: {
    number:{
      value:200,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
};

function App() {
  return (
    <div className="App">
        <Particles className='particles' params={particlesParams} />
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
