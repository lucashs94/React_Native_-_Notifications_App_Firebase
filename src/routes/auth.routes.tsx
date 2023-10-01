import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../screens/SignIn'

const AuthStack = createNativeStackNavigator()


export default function AuthRoutes(){
  return(
    <AuthStack.Navigator
      initialRouteName="home"
    >
      <AuthStack.Screen name='home' component={SignIn}/>

    </AuthStack.Navigator>
  )
}