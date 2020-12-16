import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcons from '../config/TabIcons'



export default function NavigationTab() {

    const Tab = createBottomTabNavigator();
    return (

        <Tab.Navigator
            initialRouteName="Main"
        // style={styles.buttonBar} 
        >

            <Tab.Screen
                name="Home"
                component={Main}
            // options={{
            //     tabBarLabel: 'Home',
            // tabBarIcon: () => {
            //     return (
            //         <Image
            //             source={TabIcons.home}
            //             style={{ width: 26, height: 26 }}
            //         />
            //     );
            // }
            // }} 

            />

            {/* 
            <Tab.Screen
                name="CardsScreen"
                component={}
                options={{
                    tabBarLabel: 'Le mie Carte',
                    tabBarIcon: () => (
                        return(
                            <Image
                                source={TabIcons.list}
                                style = {{ width: 26, height: 26 }}
                            />
                        );
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={}
                options={{
                    tabBarLabel: 'Profilo Utente',
                    tabBarIcon: () => (
                        return(
                            <Image
                                source={TabIcons.profile}
                                style = {{ width: 26, height: 26 }}
                            />
                        );
                    ),
                }}
            />
            */}
        </Tab.Navigator>
    )
}

// const styles = StyleSheet.create({
//     buttonBar: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// })