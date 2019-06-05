import React,{Component} from "react";


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
              <li><strong>Create</strong> meetings</li>
              <li><strong>Check in</strong> for people</li>
              <li><strong>Pick</strong> random people to award giveaways</li>
            
            </ul>
            it's a
            good example of a Single Page Application which includes
            connection to a database and routing. It's a practical
            way to learn <a href="https://reactjs.org/">React</a> 
            with <a href="https://firebase.google.com">Firebase</a>.
          </p>
            {user == null &&(
                <span>
                <a href="/register" className="btn btn-outline-primary mr-2 mb-4">
                Register
                </a>
                <a href="/login" className="btn btn-outline-primary mr-2 mb-4">
                Log In
                 </a>
                </span>
            )}
         {user &&(
             <span>
                 <a href="/meetings" className="btn btn-primary mb-4">
                    Meetings
            </a>
             </span>
         )}
          
        </div> 
      </div>
    </div>
        )
    }
}