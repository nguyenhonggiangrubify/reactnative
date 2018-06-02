import React, {Component} from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

export default class OVuong extends Component{
    render(){
        console.log("ovuong",this)
        const content = this.props.content;
        return(
            <View style={styles.ovuong}>
                <Text style={styles.text}>
                {content}
                </Text>
            </View>
        );
    }
}