import React, { Component } from 'react';
import FormError from './FormError';
import FormOK from './FormOK'
import firebase from "./Firebase"

export class Register extends Component {
 
    constructor(props){
      super(props);
      this.state = {
        displayName : '',
        email : '',
        passOne: '',
        passTwo: '',
        errorMessage: null
      };
      this.handleChange  = this.handleChange.bind(this);
      this.handleSubmit  = this.handleSubmit.bind(this);

    }

    handleChange(e){
      const itemName = e.target.name; //will return an elemment within an array
      const itemValue = e.target.value;

      this.setState({[itemName] : itemValue},()=>{
        if(this.state.passOne !== this.state.passTwo){
          this.setState({errorMessage : "the two passwords doesn't match"});
        }else{
          this.setState({errorMessage : null});
        }
          
      });
    }

    handleSubmit(e){
      let registrationInfo = {
        displayName: this.state.displayName,
        email : this.state.email,
        passOne : this.state.passOne
      }
      e.preventDefault();
      //Push data into firebase
      firebase.auth().createUserWithEmailAndPassword(
        registrationInfo.email,
        registrationInfo.passOne
      ).then(()=>{
        this.props.registerUser(registrationInfo.displayName);
      })
      .catch(error =>{
        if (error.message !== null) {
          this.setState({errorMessage : error.message})
        } else {
          this.setState({errorMessage: null})
        }
        
      })
    }
 render() {
    return (
        <form className="mt-3" onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card bg-light">
                <div className="card-body">
                  <h3 className="font-weight-light mb-3">Register</h3>
                  <div className="form-row">

                    
                    

                    <section className="col-sm-12 form-group">
                      <label
                        className="form-control-label sr-only"
                        htmlFor="displayName"
                      >
                            Display Name
                          </label>
                      <input
                        className="form-control"
                        type="text"
                        id="displayName"
                        placeholder="Display Name"
                        name="displayName"
                        required
                        value={this.state.displayName}
                        onChange={this.handleChange}
                      />
                    </section>
                  </div>
                  <section className="form-group">
                    <label
                      className="form-control-label sr-only"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      required
                      name="email"
                      value={this.state.email}
                        onChange={this.handleChange}
                    />
                  </section>
                  <div className="form-row">
                    <section className="col-sm-6 form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="passOne"
                        placeholder="Password"
                        value={this.state.passOne}
                        onChange={this.handleChange}
                      />
                    </section>
                    <section className="col-sm-6 form-group">
                      <input
                        className="form-control"
                        type="password"
                        required
                        name="passTwo"
                        placeholder="Repeat Password"
                        value={this.state.passTwo}
                        onChange={this.handleChange}
                      />
                    </section>
                    {this.state.errorMessage !== null ?(
                      <FormError msg={this.state.errorMessage}/>
                    ): null}

                    {(this.state.passOne === this.state.passTwo && this.state.passOne!=="" && this.state.passTwo!=="") ?(
                      <FormOK msg="The Two passwords Match Correctly"/>
                    ): null}
                  </div>
                  <div className="form-group text-right mb-0">
                    <button className="btn btn-primary" type="submit">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
       
    );
  }
}