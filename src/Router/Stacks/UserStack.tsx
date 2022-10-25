import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from '../../Screens/UserStack/User';
import Users from '../../Screens/UserStack/Users';


const SecondStack = createNativeStackNavigator();

export default function UserStackScreen() {
    return (
        <SecondStack.Navigator>
            <SecondStack.Screen name="Users" component={Users} />
            <SecondStack.Screen name="User" component={User} />
        </SecondStack.Navigator>
    );
}