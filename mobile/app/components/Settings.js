import React from 'react';
import {connect} from 'react-redux';
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
import Icon from 'react-native-vector-icons/FontAwesome';

var CardS = React.createClass({

   render() {
    return (
      <View style={styles.CardS}>
            <Text style={styles.setTitle}>
              {this.props.title}
            </Text>
            {this.props.children}
      </View>
    )
  }
});

var Settings = React.createClass({
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
        <TopBar title='SETTINGS'/>
        <ScrollView contentContainerStyle={styles.scrollCont}>
          <CardS title='Profile'>
            <Text>
              Your name:
            </Text>
            <Text>
              Your name:
            </Text>
            <Text>
              Your name:
            </Text>
          </CardS>
          <CardS title='Profile'>
            <Text>
              Your name:
            </Text>
            <Text>
              Your name:
            </Text>
            <Text>
              Your name:
            </Text>
          </CardS>
          <CardS title='Profile'>
            <Text>
              Your name:
            </Text>
            <Text>
              Your name:
            </Text>
            <Text>
              Your name:
            </Text>
          </CardS>


        </ScrollView>
      </View>
    );
  }
});

module.exports = Settings;
