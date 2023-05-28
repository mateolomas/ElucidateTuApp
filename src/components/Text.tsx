import { FC } from 'react'
import React from 'react'
import {Text as NBText} from 'native-base'

const Text: FC<Props> = (props) => {
  return (
    <NBText
        {...props}
    >
        {props.children}
    </NBText>
  )
}

interface Props extends React.ComponentProps<typeof NBText> {
    children: React.ReactNode;
}

export default Text