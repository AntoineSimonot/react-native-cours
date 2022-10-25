import { View, Text, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';

export default function ModalScreen({ navigation } : StackScreenProps<{}>) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>This is a fullscreen modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}