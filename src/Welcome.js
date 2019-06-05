import React, { Component } from 'react';


export class Welcome extends Component {
  render() {
    const {user} = this.props

    return (
        <div className="text-center mt-4">
            <span className="text-secondary font-weight-bold pl-1">
            Welcome {user} 
            </span>,
            <a href="/" className="text-secondary font-weight-bold pl-1">
                Log out</a>
        </div>
       
    );
  }
}

