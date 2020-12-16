import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcons from '../config/TabIcons'

import Greeting from '../screens/Greeting'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'

const Tab = createBottomTabNavigator();

export default function NavigationTab() {

    return (
      
            <Tab.Navigator initialRouteName="Home" style={styles.bottomBar} >
                <Tab.Screen name="Home" component={Greeting} />
                <Tab.Screen name="Cards" component={Login}  />
                <Tab.Screen name="Profile" component={SignUp}  />
            </Tab.Navigator>
    );

}
const styles = StyleSheet.create({
    bottomBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


{/*
<Tab.Screen
                name="Profile"
                component={SignUp}
                options={{
                    tabBarLabel: 'Il Mio Prifilo',
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={TabIcons.profile}
                                style={{ width: 26, height: 26 }}
                            />
                        );
                    }
                }} />
*/}