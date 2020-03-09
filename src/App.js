import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Logo from './components/Logo/Logo';
import FavoriteBand from './components/FavoriteBand/FavoriteBand';
import ChooseArtistsForm from './components/ChooseArtistsForm/ChooseArtistsForm';
import FestivalList from './components/FestivalList/FestivalList';
import FestivalTable from './components/FestivalTable/FestivalTable';
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
      input:'',
      route: 'signin'
    }
  }

  onRouteChanged = (route) => {
    this.setState({route: route});
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
        <Navigation onRouteChanged={this.onRouteChanged}/>
        {
          (this.state.route === 'signin')
          ? <SignIn onRouteChanged={this.onRouteChanged} />
          : <div>
              <Logo />
              <FavoriteBand/>
              <ChooseArtistsForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              /*
              <FestivalList />
              <FestivalTable />
              */
            </div> 
        }
      </div>
    );
  }
}

export default App;
