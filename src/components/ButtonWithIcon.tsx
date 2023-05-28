import React, { FC } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

const ButtonWithIcon: FC<ButtonOpacityProps> = ({onPress, children}) => {
  return (
    <TouchableOpacity
        onPress={onPress}
        style={{
            backgroundColor: '#0D6EFD',
            padding: 16,
            marginVertical: 10,
            borderRadius: 10,
            alignContent: 'center',
            alignItems: 'center',
        }}
    >
      <Text
        style={{
          fontFamily: 'Raleway',
          fontWeight: '600',
          color: 'white',
        }}
      >{children}</Text>
      
    </TouchableOpacity>
  )
}

interface ButtonOpacityProps extends TouchableOpacityProps {
    children: React.ReactNode
}

export default ButtonWithIcon