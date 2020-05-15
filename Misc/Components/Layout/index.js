import React from 'react'; 
import {View, Text} from 'react-native'; 
import Header from '../Header';
import Player from '../Player';

export default function Layout() {
    return (
        <View>
            <Header />
            <Player />
        </View>
    )
}