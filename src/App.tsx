import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  ImageBackground,
  Platform,
  StatusBar,
  Settings,
} from 'react-native';
import Home from './screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImageDetail from './screens/ImageDetail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../components/Navbar';
import Camera from './screens/Camera';
import Account from './screens/Account';
import Folders from './screens/Folders';
import Notes from './screens/Notes';
import PhotoEditor2 from './screens/TestScreen';


export type RootStackParamList = {
  Home: undefined;
  ImageDetail: { imageUri: string, imgIndex: number };
  //Feed: { sort: 'latest' | 'top' } | undefined;
};

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName={"home"} tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="folder" component={Folders} options={{headerShown:false}} />
      <Tab.Screen name="camera" component={Camera} options={{headerShown:false}} />
      <Tab.Screen name="notes" component={Notes} options={{headerShown:false}}/>
      <Tab.Screen name="account" component={Account} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeTabs' screenOptions={{headerShown:false}}>
        {/* <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='ImageDetail'
          component={ImageDetail}
          options={{
            headerShown: false
          }}
        />
       */}
      <Stack.Screen name="HomeTabs" component={HomeTabs} options={{
            headerShown: false
          }}/>
      <Stack.Screen name="ImageDetail" component={ImageDetail} options={{
            headerShown: false
          }}/>
           <Stack.Screen name="PhotoEditor2" component={PhotoEditor2} options={{
            headerShown: true
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});

export default App;
