/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import serviceLogIn from './src/services/authentication'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {
  render() {
    let a = 1
    //let a = 2
    console.log('in 2', a)
    const object = {
      greeting: 'Hello world',
    };

    const b = 4

    var c = 1
    var c = 2

    const arrowfunction = () => {
      return '12345';
    }

    const doituong = {
      ten: 'con cho',
      chieucao:'20cm',
      arrowfunction:(a) => {
        console.log('arrow func', a.greeting)
        return a
      }
    }
   
    const value = doituong.arrowfunction(object);
    console.log('value', value)

    doituong.ten = 'con chim'

    doituong.getname = () => { 
      console.log('con heo')
    }

    doituong.getname();

    console.log('doi tuong', doituong);

    console.log('c ne', c)

    console.log('print object here:', object); // câu lệnh này sẽ print object ra ở console bên chrome
    

    function cong(){
      setTimeout(()=>{
        console.log('ham 1', 'a')

      }, 5000)
    }

    function tru(){
      setTimeout(()=>{      
        console.log('ham 2', 'b')
    },3000)
    }

    cong();
    tru();

    const dite = (timeout, afterDite) => {
      setTimeout(() => {
        console.log('di te finish');
        afterDite();
      }, timeout)
    }

    const ruatay = () => {
      setTimeout( () => {console.log('rua tay xong')}, 5000)
    }

    dite(100, ruatay);

    console.log('log gi', serviceLogIn)
    const isLogin = serviceLogIn.login('lynda', 'test')
    if(isLogin == true){
      console.log('login', 'login thanh cong')
    }else
    console.log('login that bai')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
