import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }

  render() {
    return (
      <div className="App">
          <Particles className='particles' params={particlesParams} />
          <Navigation />
          <SignIn />
          <Logo />
          <FavoriteBand/>
          <ChooseArtistsForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          {/*
          <FestivalList />
          <FestivalTable />

        */}
      </div>
    );
  }
}

export default App;
