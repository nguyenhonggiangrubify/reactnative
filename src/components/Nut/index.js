import React, {Component} from 'react'
import {View, TouchableHighlight, Text} from 'react-native'
export default class Nut extends Component {
    render(){

        return(
            <View 
                style={{ padding: 8, flex: 1}}
            >
                <TouchableHighlight 
                    onPress={() => this.props.bamnut(this.props.item, 'cc to email')}
                    style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 2, shadowColor: 'black', 
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    elevation: 1,
                    shadowRadius: 2,
                    borderColor: 'grey',
                    borderWidth: 1, alignItems:'center', flex: 1, justifyContent:'center',}}>
                    <Text style={{ fontSize: 24 }}>{this.props.item}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}