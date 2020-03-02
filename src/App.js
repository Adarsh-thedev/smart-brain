import React, {Component} from 'react';
import Navigation from './components/navigation/Navigation';
import SignIn from './components/signin/SignIn';
import Register from './components/register/Register';
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

const initialState = {
  input : '',
  imageUrl : '',
  celebName : '',
  route : 'signin',
  isSignedIn : false,
  user : {
         id : '',
        name : '',
        email : '',
        entries : 0,
        joined : ''
  }
}

class App extends Component {
  constructor () {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({ 
      user : {
        id : data.id,
        name : data.name,
        email : data.email,
        entries : data.entries,
        joined : data.joined
      }
  })
  }

  onInputChange = (event) => {
    this.setState({input : event.target.value})
    //console.log(event.target.value);
  }

  onButtonSubmit = () => {
    app.models.predict(Clarifai.CELEBRITY_MODEL,
      this.state.input)
      .then(response => {
        if(response) {
          fetch('http://localhost:3000/image', {
            method : 'put',
            headers : {'Content-Type' : 'application/json'},
           body : JSON.stringify({
             id : this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => { 
          this.setState(
            Object.assign(this.state.user, {entries : count})          )
        })
      }
      let celebName = response.outputs[0].data.regions[0].data.concepts[0].name;
      //console.log(celebName);
      this.setState({celebName : celebName, imageUrl : this.state.input});
    })
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState(initialState);
    } else if(route === 'home'){
      this.setState({isSignedIn : true})
    }
    this.setState({route : route});
  }

  render() {
    const {imageUrl, celebName, route, isSignedIn, user} = this.state;
    return (
      <div className="App">
        <Particles className = 'particles' params={particlOptions}/>
        <Navigation onRouteChange = {this.onRouteChange} isSignedIn = {isSignedIn}/>
        { route === 'home'
          ? <div>
              <Logo/>
              <Rank name = {user.name} entries = {user.entries}/>
              <ImageLinkForm onInputChange = {this.onInputChange}
                onButtonSubmit = {this.onButtonSubmit}
              />
              <CelebRecognition imageUrl = {imageUrl} celebName = {celebName}/>
            </div>
          : route === 'register'
          ? <Register 
                onRouteChange = {this.onRouteChange}
                loadUser = {this.loadUser}
                // user = {user}
              />
          : <SignIn 
              onRouteChange = {this.onRouteChange}
              loadUser = {this.loadUser}
            />
        }
      </div>
    );
  }
}

export default App;
