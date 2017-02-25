import React from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from 'react-native';
import styles from '../utils/styles';
import LinearGradient from 'react-native-linear-gradient';

var TopBar = React.createClass({
  getInitialState() {
    return {
      refreshing: false
    }
  },
  onBack() {
    this.props.navigator.pop();
  },
  toSettings() {
    this.props.navigator.push({
      component: Settings,
      title: 'Settings',
      navigationBarHidden: true
    })
  },
   render() {
    return (
      <LinearGradient
        style={styles.topBar}
        colors={['#20d7af', '#4adc94']}
        start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}}>
        <TouchableOpacity onPress={this.onBack}>
        <Icon name="chevron-left" size={30} color="white" style={styles.barIcon}/>
      </TouchableOpacity>
        <Text style={styles.titleBar}>
          {this.props.title}
        </Text>
        <TouchableOpacity onPress={this.toSettings}>
        <Icon name="cog" size={30} color="white" style={styles.barIcon}/>
      </TouchableOpacity>
      </LinearGradient>
    );
  }
});




module.exports = TopBar;
