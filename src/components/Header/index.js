import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

export default class Header extends Component {
    static defaultProps = {
        nextPress: () => { console.log('default next')}
    }

    render() {
      console.log('header', this)
      const { title } = this.props; 
      return(
        <View style={styles.headerContainer}>
            <TouchableOpacity  
                onPress={this.props.backPress} 
                style={[styles.left, styles.itemCenter]}
            >
                <Text>
                Back
                </Text>
            </TouchableOpacity>
            <View style={[styles.center, styles.itemCenter]}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <TouchableOpacity 
                onPress={() => this.props.nextPress()}
                style={[styles.right, styles.itemCenter]}>
                <Text>
                    Next
                </Text>
            </TouchableOpacity>
        </View>
      ) ;
    }
}