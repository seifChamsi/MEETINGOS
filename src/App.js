// Import React
import React, { Component } from 'react';
import firebase from "./Firebase"
import { Home } from "./Home";
import { Welcome } from "./Welcome";
import { Navigation } from "./Navigation";
import { Login } from "./Login";
import { Meetings } from "./Meetings";
import { Register } from "./Register";

import {Router, navigate} from '@reach/router';


class App extends Component {
  constructor(){
    super();
    this.state = {
      user : null,
      displayName : null,
      userID : null
    }
  }

  componentDidMount(){
   firebase.auth().onAuthStateChanged(FBUSER=>{
     if (FBUSER) {
       this.setState({
         user : FBUSER,
         displayName  : FBUSER.displayName,
         uid : FBUSER.uid
       })
     }
   })
  }

  registerUser = (userName) =>{
    firebase.auth().onAuthStateChanged(FBUSER =>{
      FBUSER.updateProfile({
        displayName : userName
      }).then(()=>{
        this.setState({user:FBUSER,
        displayName:FBUSER.displayName,
        userID : FBUSER.uid
      })
      navigate('/meetings')
      })
    })
  };

logout = (e) => {
    e.preventDefault();
    this.setState({
      displayName: null,
      userID: null,
      user : null
    })

    firebase.auth().signOut().then(
      ()=>{
        navigate('/login');
      }
    )
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} logout={this.logout} />
        {this.state.user &&<Welcome userName={this.state.displayName}
        logout={this.logout} />}
        
        <Router>
              <Home path="/" user={this.state.user}/>
              <Login path="/login"/>
              <Meetings path="/meetings"/>
              <Register path="/register" registerUser={this.registerUser} />
        </Router>
         
      </div>

       
    );
  }
}

export default App;
