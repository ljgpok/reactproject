import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';



class Signin extends Component {
  handleFormSubmit({ userID, pinCode }) {
    // Need to do something to log user in
    this.props.signinUser({ userID, pinCode });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { userID, pinCode }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>UserID:</label>
          <input {...userID} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Pincode:</label>
          <input {...pinCode} type="password" className="form-control" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['userID', 'pinCode']
}, mapStateToProps, actions)(Signin);
