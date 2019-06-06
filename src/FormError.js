import React, { Component } from 'react';


class FormError extends Component {
  render() {
    const {msg} = this.props;
    return (
       <div className="col-12 alert alert-danger px-2">
           {msg}
       </div>
    );
  }
}

export default FormError;