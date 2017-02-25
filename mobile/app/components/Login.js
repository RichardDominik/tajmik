import React from 'react';
import {reduxForm} from 'redux-form';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Navigator,
  TouchableOpacity,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {loginUser, signupUser, addAlert} from '../actions';
import styles from '../utils/styles';

var Login = React.createClass({
  getInitialState: function() {
    return {
      loading: false
    }
  },
  onSignUp: function() {
    var {dispatch, fields: {email, password}} = this.props;
    this.setState({
      loading: true
    });
    dispatch(signupUser(email.value, password.value)).then(() => {
      this.setState({
        loading: false
      });
    });
  },
  render() {
    var {fields: {email, password}} = this.props;

    var renderError = (field) => {
      if (field.touched && field.error) {
        return (
          <Text style={styles.formError}>{field.error}</Text>
        )
      }
    }

    if (this.state.loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Loading...
          </Text>
        </View>
      )
    } else {
      return (
        <View style={styles.containerPage}>
    <StatusBar
      backgroundColor="blue"
      barStyle="light-content"
    />
        <Navigator
     initialRoute={{statusBarHidden: true}}
     renderScene={(route, navigator) =>
        <View style={styles.container}>
          <StatusBar hidden={route.statusBarHidden} />
          <View style={styles.contL}>
            <Image
              style={styles.logo}
              source={require('../img/tajmik.png')}
            />
            <View style={styles.logView}>

              <View style={styles.logField}>
                <TextInput
                  {...email}
                  placeholder="your@email.com"
                  style={styles.textInput}/>
                  <View>
                    {renderError(email)}
                  </View>
                </View>
                <View style={styles.logField}>
                  <TextInput
                    {...password}
                    secureTextEntry={true}
                    placeholder="password"
                    style={styles.textInput}/>
                    <View>
                      {renderError(password)}
                    </View>
                  </View>
            </View>

            </View>
            <LinearGradient
              colors={['#4adc94', '#20d7af']}
              start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
              style={styles.onSignUp}>
            <TouchableOpacity onPress={this.onSignUp}>
              <Text style={styles.titleSignUp}>
                Join us
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      }
    />
    </View>
      );
    }

  }
});


var validate = (formProps) => {
  var errors = {};
  if (!formProps.email) {
    errors.email = "Please enter an email.";
  }
  if (!formProps.password) {
    errors.password = "Please enter a password.";
  }
  return errors;
}

module.exports = reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: validate
}, null, null)(Login);
