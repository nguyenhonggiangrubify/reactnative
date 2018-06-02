import React, {Component} from 'react'
import { TouchableOpacity, Text } from 'react-native' 
export default class Button extends Component{
    constructor(props){
        super(props)
        console.log('button props', this.props)
    }

    render(){
        return <TouchableOpacity
            onPress={this.props.onPress}
            style={this.props.style}

        >
            <Text>{this.props.title}</Text>
        </TouchableOpacity>
    }
}