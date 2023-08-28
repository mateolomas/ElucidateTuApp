import React, { Children, FC } from 'react'
import { View as NBView } from 'react-native'
export const View: FC<Props> = (props) => {
  return (
    <NBView
        {...props}
    >
        {props.children}
    </NBView>

  )
}

interface Props extends React.ComponentProps<typeof NBView> {
    children: React.ReactNode;
}

export default View
