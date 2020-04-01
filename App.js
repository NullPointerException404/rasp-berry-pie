import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { Login } from './screens/Login';
import { SEmploi } from './screens/SEmploi';
import { SNote } from './screens/SNote';
import { SExam } from './screens/SExam';
import { PEmploi } from './screens/PEmploi';
import { Absence } from './screens/Absence';
import { PExam } from './screens/PExam';
import { AddExam } from './screens/AddExam';
import { PNote } from './screens/PNote';
import { SideBar } from './screens/SideBar';

const Tab=createBottomTabNavigator();
const Drawer=createDrawerNavigator();
const Stack=createStackNavigator();

const sideBar=()=>{
  return (
    <SideBar />
  );
}

const studentHome=()=>{
  return (
    <Tab.Navigator initialRouteName='Emploi'>
      <Tab.Screen name="Emploi" component={SEmploi} />
      <Tab.Screen name="Notes" component={SNote} />
      <Tab.Screen name="Exams" component={SExam} />
    </Tab.Navigator>
  );
};
const profHome=()=>{
  return (
    <Tab.Navigator initialRouteName='Emploi'>
      <Tab.Screen name="Emploi" component={PEmploi} />
      <Tab.Screen name="Absence" component={Absence} />
      <Tab.Screen name="Emploi Exam" component={PExam} />
      <Tab.Screen name="ajout Exam" component={AddExam} />
      <Tab.Screen name="Notes" component={PNote} />
    </Tab.Navigator>
  );
};

const StudentHome=()=>{
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={sideBar} backBehavior='none'>
      <Drawer.Screen name="Home" component={studentHome} />
    </Drawer.Navigator>
  );
};
const ProfHome=()=>{
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={sideBar} backBehavior='none'>
      <Drawer.Screen name="Home" component={profHome} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Authentification">
        <Stack.Screen name="Authentification" component={Login} />
        <Stack.Screen name="Espace Enseignant" component={ProfHome} />
        <Stack.Screen name="Espace Etudiant" component={StudentHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
