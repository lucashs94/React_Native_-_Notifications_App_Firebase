import React, { useRef, useState } from 'react'
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { Container, ContainerKeyboard, ContainerLogo, Logo, SignInButton, SignInTextButton } from './styles'

import logoImage from '../../assets/logo.png'
import InputsSignIn from '../../components/InputsSignIn'


export default function SignIn(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailInputRef = useRef<HTMLInputElement | null>(null)


  function logar(){
    if (email === '' || password === ''){
      console.log('email e/ou senha invalidos');
      emailInputRef.current?.focus()
    }
  }


  return(
    <Container>
      <StatusBar style='light'/>

      <ContainerLogo>
        <Logo 
          source={logoImage}
        />
      </ContainerLogo>

      <ContainerKeyboard 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{width: '100%'}}
        keyboardVerticalOffset={100}
      >
        <InputsSignIn
          ref={emailInputRef}
          placeholder='E-mail'
          iconName={'account'}
          value={email}
          onChangeText={setEmail}
        />

        <InputsSignIn 
          secureTextEntry
          placeholder='Senha'
          iconName={'lock-outline'}
          value={password}
          onChangeText={setPassword}
        />
        
        <SignInButton
          activeOpacity={0.8}
          onPress={logar}
        >
          <SignInTextButton>LOGIN</SignInTextButton>
        </SignInButton>
      
      </ContainerKeyboard>
    </Container>
  )
}