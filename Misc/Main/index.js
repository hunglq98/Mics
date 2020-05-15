import React from 'react'; 
import {AppState} from 'react-native'; 

export default function init() {
    AppState.addEventListener('change', appState => {
        if (appState == 'active') {
            console.log('active app')
        }
    })  
    return (
        <View>
            <Text>Main</Text>
        </View>
    )
}