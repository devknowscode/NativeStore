/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import OrderScreen from '../screens/OrderScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3665f3',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#f7f7f7',
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {color: '#3665f3'},
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <Foundation name="home" size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: '',
          tabBarLabelStyle: {color: '#3665f3'},
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarLabel: '',
          tabBarLabelStyle: {color: '#3665f3'},
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome6 name="box" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: '',
          tabBarLabelStyle: {color: '#3665f3'},
          headerShown: false,
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <MaterialIcons name="notifications" size={30} color={color} />
            ) : (
              <MaterialIcons
                name="notifications-none"
                size={30}
                color={color}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: '',
          tabBarLabelStyle: {color: '#3665f3'},
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name="user-circle-o" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
