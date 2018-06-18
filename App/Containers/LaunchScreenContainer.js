import React, { Component } from 'react'
import { connect } from 'react-redux';
import LaunchScreen from '../Components/LaunchScreen.js'
import PrimaryNav from '../Navigation/AppNavigation';
import { StackNavigator,withNavigation} from 'react-navigation';

class LaunchScreenContainer extends Component {
  render () {
    var {navigation,user}=this.props;

    return (
      <LaunchScreen navigation={navigation} user={user}/>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(LaunchScreenContainer);
