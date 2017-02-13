import axios from 'axios';
import Keychain from 'react-native-keychain';
import jwtDecode from 'jwt-decode';
import {TODOS_URL, TODO_URL} from '../api';
import {addAlert} from './alertsActions';

exports.createTodo = (title) => {
  return function(dispatch) {
    return Keychain.getGenericPassword().then((credentials) => {
    var {creator, token} = credentials;
    var completed = false;
    
    return axios.post(TODOS_URL, {title, completed, creator}).then((response) => {
        dispatch(addAlert(creator));
    }).catch((error) => {
      dispatch(addAlert("Adding."));
    });
    })
  }
}

exports.deleteTodo = (todo_id) => {
  return function(dispatch) {
    // return Keychain.getGenericPassword().then((credentials) => {
    //   var {username, password} = credentials;
    //   return axios.delete(TODO_URL(username, todo_id), {
    //     headers: {authorization: password}
    //   }).then((response) => {
    //     dispatch(removeTodo(todo_id));
    //   }).catch((err) => {
    //     dispatch(addAlert("Couldn't delete todo."));
    //   })
    // })
  }
}

exports.getTodos = function(dispatch) {
  return Keychain.getGenericPassword().then((credentials) => {

    
    return axios.get(TODOS_URL).then((response) => {
        console.log(response.data);
        dispatch(setTodos(response.data));
    }).catch((error) => {
      dispatch(addAlert("Adding ."));
    });
    })
}

var addTodo = (newTodo) => {
  return {
    type: 'ADD_TODO',
    newTodo
  }
}

var removeTodo = (todo_id) => {
  return {
    type: 'REMOVE_TODO',
    todo_id
  }
}

export var setTodos = (todos) => {
  return {
    type: 'SET_TODOS',
    todos
  }
}
