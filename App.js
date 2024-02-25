import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputInfoScreen from './inputInfoScreen';
import GetStartedScreen from './getStartedScreen';
import MainScreen from './mainScreen';
import SettingScreen from './settingScreen';
import HelpScreen from './helpScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createNativeStackNavigator()
//const Stack = createStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
         <Stack.Navigator>
             <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{ headerShown: false }}/>
             <Stack.Screen name="InputInfo" component={InputInfoScreen} options={{ headerShown: false }} />
             <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
             <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
             <Stack.Screen name="Help" component={HelpScreen} options={{ headerShown: false }} />
         </Stack.Navigator>
     </NavigationContainer>
    // <NavigationContainer>
    //    <Stack.Navigator>
    //        <Stack.Screen
    //            name="GetStarted"
    //            component={GetStartedScreen}
    //            options={{ headerShown: false }} // Hide the header for this screen
    //        />
    //        <Stack.Screen name="InputInfo" component={InputInfoScreen} options={{title: ""}} />
    //    </Stack.Navigator>
    // </NavigationContainer>
  );
}
