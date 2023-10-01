import React, { ForwardedRef, forwardRef, useState } from 'react'
import { StyleSheet } from 'react-native'

import Icon from '@expo/vector-icons/MaterialCommunityIcons'

import { ContainerInput, IconSecretButton, InputField } from './styles'

type MaterialIconName = React.ComponentProps<typeof Icon>['name']


interface Props {
  secureTextEntry?: boolean | undefined
  iconName: MaterialIconName
  placeholder?: string | undefined
  value?: string | undefined
  onChangeText: React.Dispatch<React.SetStateAction<string>>
}
export type Ref = HTMLInputElement


const InputsSignIn = forwardRef<Ref, Props>((props, ref) => {

  const [secure, setSecure] = useState(props.secureTextEntry)
  
  return(

    <ContainerInput>

      <Icon
        name={props.iconName}  
        size={23}
        color={'#AAA'}
        style={styles.iconLeft}
      />

      <InputField 
        {...props}
        ref={ref}
        autoCapitalize='none'
        autoComplete='off'
        keyboardType={secure? 'default' : 'email-address'}
        autoCorrect={false}
        secureTextEntry={secure}
      />

      {props.secureTextEntry && (
        <IconSecretButton
          activeOpacity={0.7}
          onPress={ () => setSecure(!secure) }
        >
          <Icon
            name={secure ? 'eye' : 'eye-off'}
            size={23}
            color={'#AAA'}
            style={styles.iconSecret}
          />
        </IconSecretButton>
      )}

    </ContainerInput>
  )
})

export default InputsSignIn

const styles = StyleSheet.create({
  iconSecret: {
    marginLeft: -35,
  },
  iconLeft:{
    position: 'absolute',
    left: 47,
    zIndex: 99,
  }
})