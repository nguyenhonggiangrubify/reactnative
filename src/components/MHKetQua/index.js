import React, {Component} from 'react'
import {View, TouchableHighlight, Text} from 'react-native'
import styles from './styles'
import Button from '../Button'

export default class MHKetQua extends Component{
    state = {
        ketquabackground:'grey',
        title: 'KetQua'
    }
    handleChangeColor() {
        if(this.state.ketquabackground === 'grey'){
            return this.setState({ketquabackground: 'pink', title:'pink'})
        }

        return this.setState({ketquabackground: 'grey', title:'grey'})

         
    }
    render(){
        return(
            <View style={styles.manhinh}>

                <Button
                title={this.state.title}
                onPress={()=> this.handleChangeColor()}
                style={{width:'100%',height:48,
                backgroundColor:'red',
                alignItems:'center',
                justifyContent:'center'
                }} />
                
                <View style={{flex:1, backgroundColor:this.state.ketquabackground}}>
                </View>
            </View>
        );
    }
}