import React, {Component} from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlOptions = {
  particles : {
    number : {
      value : 100,
      density : {
        enable : true,
        value_area : 800
      },
      line_linked : {
        enable : true,
        distance : 250,
        width : 1
      },
      move : {
        enable : true,
        speed : 6
      }
    }
  },
  interactivity:{
    detect_on:'canvas',
    events:{
        onhover:{
          enable:true,
          mode:'grab'
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className = 'particles' params={particlOptions}/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm/>
      </div>
    );
  }
}

export default App;
