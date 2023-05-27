import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
const ButtonOpacity: FC<ButtonOpacityProps> = () => {
  return (
    <TouchableOpacity
       
        style={{
            backgroundColor: '',
        }}
    >
        
    </TouchableOpacity>

  )
}

interface ButtonOpacityProps extends TouchableOpacity {
    title: string
}

export default ButtonOpacity