import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import { HomePage } from "../pages/HomePage"
const App = () => {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="Example" component={HomePage}
                    options={{
                        title: 'HomePage',
                        headerShown: false
                    }}

                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;