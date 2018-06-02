import React from 'react'
import {Text, View} from 'react-native'
import Header from '../src/components/Header'

export default class MyApp extends React.Component{
    render(){
        //ok
        return (       
            <View
                style={
                    {
                        flex: 1,
                        // backgroundColor: 'red',
                        // alignItems: 'center',
                        // justifyContent:'center'
                    }

                }

            >
            <Header 
                // title='Lynda' 
                backPress={() => console.log('back')}
                //nextPress={() => console.log('net')}
            />
            </View>
        );
    }


}