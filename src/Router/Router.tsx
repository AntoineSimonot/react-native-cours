import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserStackScreen from './Stacks/UserStack';

const RootStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator   >
            <Tab.Screen options={
                {
                    headerShown: false
                }
            }
            name="UserStack" component={UserStackScreen} />
        </Tab.Navigator>
    )
}

export default function Router() {

    const [appAssetsLoaded, setAssetsAppLoaded] = useState(false);

    useEffect(() => {

        Promise.all([
            // Font.loadAsync({
            //     Font1: require('../assets/fonts/Font1.ttf'),
            //     Font2: require('../assets/fonts/Font2.ttf'),
            // }),
            // Asset.fromModule(require('../assets/images/image1.png')).downloadAsync(),
            // Asset.fromModule(require('../assets/images/image2.png')).downloadAsync(),
        ]).then(() => {
            setAssetsAppLoaded(true)
        });

    }, [])

    if (!appAssetsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>

            <RootStack.Navigator screenOptions={{ headerShown: false }}>

                <RootStack.Group>
                    <RootStack.Screen name="TabNavigator" component={TabNavigator} />
                </RootStack.Group>

                {/* For simple Modal */}
                <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                </RootStack.Group>

                {/* For a fullScreenModal */ }
                <RootStack.Group screenOptions={{ presentation: 'fullScreenModal' }}>
                </RootStack.Group>

            
            </RootStack.Navigator>

        </NavigationContainer>
    )

}