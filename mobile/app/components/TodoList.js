import React from 'react';
import {connect} from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {unauthUser, getTodos, deleteTodo, setTodos} from '../actions';

import styles from '../utils/styles';
import TopBar from './TopBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createTodo} from '../actions';

var TodoItem = connect()(React.createClass({
  getInitialState() {
    return {
      deleting: false
    }
  },
  onDelete() {
    this.setState({deleting: true});
    this.props.dispatch(deleteTodo(this.props.id));
  },


   render() {
    return (
      <View style={styles.todoItem}>
            <Icon name="trash-o" size={21} color='#2ecc71'/>
            <Text style={styles.setTitle}>
              {this.props.text}
            </Text>
            <TouchableOpacity onPress={this.onDelete}>
            <Icon name="check" size={21} color='#2ecc71'/>
            </TouchableOpacity>
      </View>
    )
  }
}));

var TodoList = React.createClass({

  getInitialState() {
    return {
      refreshing: false,
      newTodoText: undefined
    }
  },

  onRefresh() {
    this.setState({refreshing: true});
    this.props.dispatch(getTodos).then(() => {
      this.setState({refreshing: false});
    })
  },
  addNewTodo() {
    var {newTodoText} = this.state;
    var {dispatch} = this.props;
    if (newTodoText && newTodoText != "") {
      this.setState({loading: true});
      dispatch(createTodo(newTodoText)).then(() => {
        this.setState({loading: false});

      });
    }
    this.props.dispatch(getTodos).then(() => {
      this.setState({refreshing: false});
    })
  },
  render() {
    console.log("todos", this.props.todos);
    var renderTodos = () => {
      return this.props.todos.map((todo) => {
        return (
          <TodoItem key={todo._id} text={todo.title} id={todo._id}/>
          )
      })
    }

    return (

      <View style={styles.containerPage}>
        <TopBar title='TASK MANAGER'/>



      <ScrollView
      refreshControl={
        <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}/>
      }
      automaticallyAdjustContentInsets={false}
      contentContainerStyle={styles.scrollCont}>
      {renderTodos()}
      </ScrollView>
      <TextInput
        onChangeText={(newTodoText) => {
          this.setState({newTodoText})
        }}
        placeholder="New Task"
        style={styles.input}/>
      <TouchableOpacity onPress={this.addNewTodo}>
      <LinearGradient
        colors={['#4adc94', '#20d7af']}
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        style={styles.addTodoBtn}>
        <View>
          <Icon name="plus" size={30} color="white"/>
        </View>
      </LinearGradient>
    </TouchableOpacity>
      </View>

      );
  }
});

var mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

module.exports = connect(mapStateToProps)(TodoList);
