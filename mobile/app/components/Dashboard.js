import React from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Navigator,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  DrawerLayoutAndroid
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TodoList from './TodoList';
import EventList from './EventList';
import Weather from './Weather';
import Settings from './Settings';
import TopBar from './TopBar';
import Profile from './Profile';
import ReadingList from './ReadingList';
import unauthUser from '../actions';
import styles from '../utils/styles';

var CardL = React.createClass({
   render() {
    return (
      <View style={styles.CardL}>
        <LinearGradient
          colors={['#4adc94', '#20d7af']}
          start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
          style={styles.cardTitle}>
          <TouchableOpacity>
            <Text style={styles.titleSignUp}>
              {this.props.title}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    )
  }
});
var MenuItem = React.createClass({

   render() {

    return (
    <View style={styles.menuItemCont}>
        <LinearGradient
          colors={['#4adc94', '#20d7af']}
          start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
          style={styles.menuBtn}>
          <View>
            <Icon name={this.props.icon} size={50} color="white"/>
          </View>
        </LinearGradient>
      <Text style={styles.menuTitle}>
        {this.props.title}
      </Text>
    </View>
    )
  }
});

var Dashboard = React.createClass({
  getInitialState() {
    return {
      refreshing: false
    }
  },

  toEvents() {

    this.props.navigator.push({
      component: EventList,
      title: 'EventList',
      navigationBarHidden: true
    })
  },
  toTasks() {

    this.props.navigator.push({
      component: TodoList,
      title: 'TodoList',
      navigationBarHidden: true
    })
  },
  toWeather() {
    this.props.navigator.push({
      component: Weather,
      title: 'Weather',
      navigationBarHidden: true
    })
  },
  toSettings() {
    this.props.navigator.push({
      component: Settings,
      title: 'Settings',
      navigationBarHidden: true
    })
  },
  toLinks() {
    this.props.navigator.push({
      component: ReadingList,
      title: 'ReadingList',
      navigationBarHidden: true
    })
  },
  toProfile() {
    this.props.navigator.push({
      component: Profile,
      title: 'Profile',
      navigationBarHidden: true
    })
  },
  onLogout() {
    this.props.dispatch(unauthUser);
  },
  render() {
    var navigationView = (
      <View style={styles.menuContainer}>
        <View>
          <TouchableOpacity onPress={this.toTasks}>
            <MenuItem title="Dashboard" icon="line-chart"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toEvents}>
            <MenuItem title="Events" icon="calendar-o"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toWeather}>
            <MenuItem title="Weather" icon="sun-o"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toProfile}>
            <MenuItem title="Profile" icon="user"/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={this.toTasks}>
            <MenuItem title="Tasks" icon="list-ul"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toLinks}>
            <MenuItem title="Reading list" icon="link"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toTasks}>
            <MenuItem title="Tasks" icon="list-ul"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toSettings}>
            <MenuItem title="Settings" icon="cog"/>
          </TouchableOpacity>
        </View>
      </View>
    );
    return (


      <View style={styles.containerPage}>
  <StatusBar
    backgroundColor="blue"
    barStyle="light-content"
  />
      <Navigator
   initialRoute={{statusBarHidden: true}}
   renderScene={(route, navigator) =>

      <DrawerLayoutAndroid
        drawerWidth={360}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        ref={'MENU'}>
        <StatusBar hidden={route.statusBarHidden} />
        <View style={styles.containerPage}>
          <TopBar title='DASHBOARD'>

          </TopBar>

        <ScrollView contentContainerStyle={styles.scrollCont}>
          <CardL title='Tasks'/>
          <CardL title='Events'/>
          <CardL title='Weather'/>
        </ScrollView>
        </View>
      </DrawerLayoutAndroid>
    }
  />
  </View>
    );
  }
});



module.exports = Dashboard;
