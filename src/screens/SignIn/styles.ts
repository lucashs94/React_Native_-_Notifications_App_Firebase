import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #1A2F4E;
`

export const ContainerKeyboard = styled.KeyboardAvoidingView`
  align-items: center;
`

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`

export const Logo = styled.Image`
  width: 600px;
  height: 200px;
`

export const SignInButton = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  background-color: green;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

export const SignInTextButton = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
`
