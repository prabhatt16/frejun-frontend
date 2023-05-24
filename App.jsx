import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import TableScreen from './src/TableScreen';
import TableDetails from './src/TableDetails';
import EditItem from './src/EditItem';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider, useDispatch} from 'react-redux';
import {store} from './src/store';
import AddUser from './src/AddUser';
import axios from 'axios';
import {getUsers} from './src/server';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="TableScreen" component={TableScreen} />
          <Stack.Screen name="TableDetails" component={TableDetails} />
          <Stack.Screen name="EditDetails" component={EditItem} />
          <Stack.Screen name="AddUser" component={AddUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
