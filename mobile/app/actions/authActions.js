import axios from 'axios';
import Keychain from 'react-native-keychain';
import jwtDecode from 'jwt-decode';
import {SIGNIN_URL, SIGNUP_URL} from '../api';
import {addAlert} from './alertsActions';



exports.signupUser = (email, password) => {
  return function(dispatch) {
    return axios.post(SIGNUP_URL, {email, password}).then((response) => {
      console.log(response);
      return axios.post(SIGNIN_URL, {email, password}).then((response) => {
        console.log(email + "  " + password);
        var {success, token} = response.data;
        password = jwtDecode(token.substring(3)).password;
        user_id = jwtDecode(token.substring(3))._id;
        Keychain.setGenericPassword(user_id, password)
          .then(function() {
            dispatch(authUser(user_id));
          }).catch((error) => {
            dispatch(addAlert("Could not log in."));
          });
      }).catch((error) => {
        dispatch(addAlert("Could not log in."));
       });
    }).catch((error) => {
      dispatch(addAlert("Could not sign up."));
    });
  }
}

authUser = (user_id) => {
  return {
    type: 'AUTH_USER',
    user_id
  }
}

exports.unauthUser = {
  type: 'UNAUTH_USER'
}
