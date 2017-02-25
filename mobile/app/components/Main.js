import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator
} from 'react-native';

// import {unauthUser} from '../actions';
// onLogout: function() {
//   this.props.dispatch(unauthUser);
// },
// <TouchableOpacity onPress={this.onLogout}>
//   <Text>
//     Logout
//   </Text>
// </TouchableOpacity>

import Dashboard from './Dashboard';

var routes = [
  {
    component: Dashboard,
    title: 'Dashboard',
    navigationBarHidden: true,
    statusBarHidden: true
  }
];

var Main = React.createClass({
  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          return (
            <route.component navigator={navigator} {...route.passToProps}/>
          )
        }}
      style={{flex: 1}}/>
    );
  }
});

module.exports = Main;
