import React,{Component} from "react";
import {Link} from '@reach/router';

export class Home extends Component {
    
    render(){
       const {user} = this.props
        return(
            
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-10 col-md-10 col-lg-8 col-xl-7 border border-primary rounded mt-2">
          <div className="display-4  text-danger mt-4 mb-4">
              Meetingo
          </div>
          <p className="lead">
            MEETINGO is a Single Page Application it's able to :
            <ul className="list-unstyled">
              <li><span className="text-primary font-weight-bold pl-1">Create</span> meetings</li>
              <li><span className="text-primary font-weight-bold pl-1">Check in</span> for people</li>
              <li><span className="text-primary font-weight-bold pl-1">Pick</span> random people to award giveaways</li>
            
            </ul>
            it's a
            good example of a Single Page Application which includes
            connection to a database and routing. It's a practical
            way to learn <a to="https://reactjs.org/">React</a> 
            with <a to="https://firebase.google.com">Firebase</a>.
          </p>
            {user == null &&(
                <span>
                <Link to="/register" className="btn btn-outline-primary mr-2 mb-4">
                Register
                </Link>
                <Link to="/login" className="btn btn-outline-primary mr-2 mb-4">
                Log In
                 </Link>
                </span>
            )}
         {user &&(
             <span>
                 <Link to="/meetings" className="btn btn-primary mb-4">
                    Meetings
            </Link>
             </span>
         )}
          
        </div> 
      </div>
    </div>
        )
    }
}