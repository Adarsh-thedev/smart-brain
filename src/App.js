import React, {Component} from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import CelebRecognition from './components/celebRecognition/CelebRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: '6a6ffa8248ea4f43ba2f048035af65e2'
 });

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
           onclick : {
              enable : true,
              mode : "repulse"
          }
      },
       modes : {
          repulse : {
              distance : 300,
              duration : 4
          }
      }
  }
}


class App extends Component {
  constructor () {
    super();
    this.state = {
      input : '',
      imageUrl : '',
      celebName : ''
    }
  }

  onInputChange = (event) => {
    this.setState({input : event.target.value})
    //console.log(event.target.value);
  }

  onButtonSubmit = () => {
    app.models.predict(Clarifai.CELEBRITY_MODEL,
      this.state.input)
      .then(response => {
        let celebName = response.outputs[0].data.regions[0].data.concepts[0].name;
        console.log(celebName.toUpperCase());
        this.setState({celebName : celebName, imageUrl : this.state.input});
      })
  }

  render() {
    return (
      <div className="App">
        <Particles className = 'particles' params={particlOptions}/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange = {this.onInputChange}
          onButtonSubmit = {this.onButtonSubmit}
        />
        <CelebRecognition imageUrl = {this.state.imageUrl} celebName = {this.state.celebName}/>
      </div>
    );
  }
}

export default App;
