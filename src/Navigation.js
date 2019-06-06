import React, { Component } from 'react';
import {FaMeetup,FaSignOutAlt,FaUsers} from 'react-icons/fa';
import {Link} from '@reach/router';

export class Navigation extends Component {
  render() {
    const {user} = this.props
    return (
       
        <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
            <a href="/" className="navbar-brand">
            <FaMeetup className="fa fa-3x mr-1 "/>Meetingo
            </a>
            <div className="navbar-nav ml-auto">
                {user &&(
                    <Link className="nav-item nav-link" to="/meetings">
                    <FaUsers className="mr-1"/>meetings
                    </Link>
                )}
                
                {!user&&(
                    <Link className="nav-item nav-link" to="/login">
                    log in
                    </Link>
                )}

               {!user&&(
                   <Link className="nav-item nav-link" to="/register">
                   register
                   </Link>
               )} 
                
                {user&&(
                     <Link className="nav-item nav-link" to="/login">
                     <FaSignOutAlt className="mr-1"/>log out
                     </Link>
                )}
               
            </div>
        </div>
        </nav>
    );
  }
}