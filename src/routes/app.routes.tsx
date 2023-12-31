import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'

const Stack = createNativeStackNavigator()


export default function AppRoutes(){
  return(
    <Stack.Navigator
      initialRouteName="home"
    >
      <Stack.Screen name='home' component={Home}/>
    </Stack.Navigator>
  )
}