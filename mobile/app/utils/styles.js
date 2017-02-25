import {
    StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eefffb'
  },
  containerPage: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#eefffb'
  },
  contL:{
    alignItems: 'center',
    width: 300,
    height: 500,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
  },
  logo:{
    width: 220,
    height: 66,
    marginTop: 50
  },
  logField:{
    width: 250,
    height: 50,
  },
  logView: {
    marginTop: 220
  },
  onSignUp:{
    width: 180,
    height: 30,
    padding: 18,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -17,
  },
  titleSignUp:{
    fontSize: 20,
    color: '#fff',
  },
  topBar:{
    width: 360,
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleBar:{
    fontSize: 20,
    color: '#f1f1f1',
    letterSpacing: 8,
    fontFamily: 'Helvetica', fontWeight: 'bold'
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eefffb'
  },
  menuBtn:{
    width: 102,
    height: 102,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  menuTitle:{
    fontSize: 19,
    color: '#4adc94',
    marginTop: -15
  },
  menuItemCont : {
    justifyContent: 'center',
    alignItems: 'center',

  },
  cardTitle:{
    width: 175,
    height: 30,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  CardL: {
    alignItems: 'center',
    width: 310,
    height: 240,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginTop: 25
  },
  scrollCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardS: {
    alignItems: 'center',
    width: 310,

    backgroundColor: 'white',
    padding: 5,
    borderRadius: 12,
    marginTop: 25
  },
  setTitle: {
    fontSize: 20,
    color: '#272b38',
  },
  addTodoBtn: {
    width: 50,
    height: 50,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  todoItem: {
    alignItems: 'center',
    width: 310,
    height: 42,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 12,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  }
});

module.exports = styles;
