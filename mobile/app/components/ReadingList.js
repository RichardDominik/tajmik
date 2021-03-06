import React from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from 'react-native';
import styles from '../utils/styles';
import TopBar from './TopBar';
var ReadingList = React.createClass({
  getInitialState() {
    return {
      refreshing: false
    }
  },
  onBack() {
    this.props.navigator.pop();
  },
   render() {
    return (

      <View style={styles.containerPage}>
        <TopBar title='READING LIST'/>
      </View>

    );
  }
});




module.exports = ReadingList;
