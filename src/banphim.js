import React from 'react'
import OVuong from '../src/components/OVuong'
import {View, Dimensions, Text, TouchableHighlight, Alert } from 'react-native'
import banphimdata from './database/banphimdatabase';
import Nut from './components/Nut'
import MHKetQua from './components/MHKetQua'

export default class BanPhim extends React.Component{
    
    state = {
        toanTu:'1',
        ketQua:0
    }

    handleBamNut(value){
        Alert.alert(value)
        if(value !== '+')
         return this.setState({phepToan:value})
        
        
    }

    renderRow() {
        return banphimdata.map((row, index) => {
            console.log('row data', row);
                return <View key={index} style={{ flex: 1, flexDirection: 'row'}}>
                    {row.map((item, i) => {
                        return <Nut 
                        key={i} 
                        item={item} 
                        bamnut={(value, cc)=>{this.handleBamNut(value)}}/>
                    })}
                </View>
            }
        )
    }

    render(){
        /*
        const myWidth = Dimensions.get('window').width;
        const height = myWidth/4
        console.log('width', myWidth)
        */

       const myWidth = Dimensions.get('window').width;
        console.log('ban phim data', banphimdata);
        return(
            <View style={{flex:1}}>
                <View style={{flex:1 }}>
                    <MHKetQua/>
                </View>
                <View style={{width:myWidth, height:myWidth / 4 * 5 }}>
                    {this.renderRow()}
                </View>
            </View>
            /*
            <View style={{ width: myWidth, height: myWidth, backgroundColor: 'red' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }} />
                </View>

            </View>
            */
        )
    }
}