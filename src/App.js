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
          value : 360,
          density : {
              enable : false,
          }
      },
      size : {
          value : 5,
          random : true,
          anim : {
              speed : 3,
              size_min : 0.3
          }
      },
      line_linked : {
          enable : false
      },
      move : {
          random : true,
          speed : 2.5,
          direction : "bottom",
          out_mode : "out"
      }
  },
  interactivity: {
      events : {
          onhover : {
              enable : true,
              mode : "repulse"
          },
           onclick : {
              enable : true,
              mode : "repulse"
          }
      },
       modes : {
          bubble : {
              distance : 250,
              duration : 2,
              size : 0,
              opacity : 0
          },
          repulse : {
              distance : 300,
              duration : 4
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
