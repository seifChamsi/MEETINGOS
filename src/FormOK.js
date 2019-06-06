import React, { Component } from 'react';


class FormOK extends Component {
  render() {
    const {msg} = this.props;
    return (
       <div className="col-12 alert alert-success px-2">
           {msg}
       </div>
    );
  }
}

export default FormOK;