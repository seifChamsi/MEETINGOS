// Import React
import React, { Component } from 'react';
import firebase from "./Firebase"
import { Home } from "./Home";
import { Welcome } from "./Welcome";
import { Navigation } from "./Navigation";
import { Login } from "./Login";
import { Meetings } from "./Meetings";
import { Register } from "./Register";

import {Router} from '@reach/router';


class App extends Component {
  constructor(){
    super();
    this.state = {
      user : null
    }
  }

  componentDidMount(){
    //select the user refernce in the firebase database
    const ref = firebase.database().ref('user');
    //event to update the state into the user value
    ref.on('value', snapshot=>{
      let FBUSER = snapshot.val();
      this.setState({user : FBUSER})
    })
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user}/>
        {this.state.user &&<Welcome user={this.state.user}/>}
        
        <Router>
              <Home path="/" user={this.state.user}/>
              <Login path="/login"/>
              <Meetings path="/meetings"/>
              <Register path="/register"/>
        </Router>
         
      </div>

       
    );
  }
}

export default App;
