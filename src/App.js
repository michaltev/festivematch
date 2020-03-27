import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
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
      route: 'signin',
      isSignedIn: false,
      festivals : [],
      user: {
        id: '',
        name: '',
        email: '',
        joined: '',
        favbandid: '',
        favbandname: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined,
      favbandid: data.favbandid,
      favbandname: data.favbandname
    }});
  }

  renderByRouteSwitch = () => {
    switch (this.state.route)
    {
      case ('home'):
       return (
        <div>
          <Logo />
          <FavoriteBand id={this.state.user.id} 
                        name={this.state.user.name} 
                        favbandid={this.state.user.favbandid}
                        favbandname={this.state.user.favbandname}
                        loadUser={this.loadUser}/>
          <ChooseArtistsForm onButtonSearch={this.onButtonSearch} />
          
          <FestivalList festivals={this.state.festivals}/>
          <FestivalTable />
          
        </div> 
        );
      case ('signin'):
        return (<SignIn onRouteChanged={this.onRouteChanged} loadUser={this.loadUser} />);
      case ('register'):
        return (<Register onRouteChanged={this.onRouteChanged} loadUser={this.loadUser} />);
      case ('sighout'):
        return (<SignIn onRouteChanged={this.onRouteChanged} loadUser={this.loadUser}/>);
      default:
        return (<SignIn onRouteChanged={this.onRouteChanged} loadUser={this.loadUser}/>);
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(console.log);
  }

  onRouteChanged = (route) => {
    if(route === 'signout')
    {
      this.setState({isSignedIn: false});
    }
    else if (route === 'home')
    {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  onButtonSearch = (p_secondArtist) => {
    console.log('now search');
    
    // search festivals of the favorite band only
    if(Object.keys(p_secondArtist).length === 0)
    {
      fetch(`http://localhost:3000/festivals/${this.state.user.favbandid}`, {
          method: 'get',
          headers: {'Content-Type':'application/json'}
        })
        .then(response => response.json())
        .then(data => {
          this.setState({festivals : data});
        });
    }
    // search festivals of the favorite band + the second artist
    else {
      console.log("colaboration");
    }
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesParams} />
        <Navigation onRouteChanged={this.onRouteChanged} isSignedIn={this.state.isSignedIn}/>
        {
          this.renderByRouteSwitch()
        }
      </div>
    );
  }
}

export default App;
