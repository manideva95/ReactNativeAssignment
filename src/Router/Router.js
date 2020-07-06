// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from '../Modules/PostScreen';
import RawJsonViewScreen from '../Modules/RawJsonViewScreen';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"PostScreen"}>
                <Stack.Screen name="PostScreen" component={PostScreen} options={{ title: 'Posts' }} />
                <Stack.Screen name="RawJsonViewScreen" component={RawJsonViewScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;