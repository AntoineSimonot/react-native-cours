import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../Screens/HomeScreen'

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    );
}