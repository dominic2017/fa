import React, { Component } from 'react'
import { connect } from 'react-redux';
import AddLocation from '../Components/AddLocation.js'

class AddLocationContainer extends Component {
  render () {
  var {user}=this.props;
    return (
      <AddLocation user={user}/>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(AddLocationContainer);
