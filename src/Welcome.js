import React, { Component } from 'react';
import { Link } from "@reach/router";


export class Welcome extends Component {
  render() {
    const {userName, logout} = this.props

    return (
        <div className="text-center mt-4">
            <span className="text-secondary font-weight-bold pl-1">
            Welcome {userName} 
            </span>,
            <Link to="/login" onClick={e=>logout(e)} className="text-primary font-weight-bold pl-1">
                Log out</Link>
        </div>
       
    );
  }
}

