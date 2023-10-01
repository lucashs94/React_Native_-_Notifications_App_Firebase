import SignIn from "./src/screens/SignIn"
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/contexts/authContext'

import Theme from "./src/Themes/theme"

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <AuthProvider>
          <SignIn />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}
