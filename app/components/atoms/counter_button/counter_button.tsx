import { Icon } from '@rneui/base'
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Container = styled(View)`
  height: 44px;
  width: 128px;
  border: 1px solid #403902;
  justify-content: center;
  align-items: center;
`

type TButtonProps = {
  onPressIn?: () => void
  onPressOut?: () => void
  title: string
  disabled: boolean
}
const CounterButton = ({ title, onPressIn, onPressOut, disabled }: TButtonProps) => (
  <TouchableOpacity onPressIn={onPressIn} onPressOut={onPressOut} disabled={disabled} hitSlop={5}>
    <Container>
      <Icon name={title === 'Increment' ? 'plus-one' : 'exposure-minus-1'} size={30} color="black" />
    </Container>
  </TouchableOpacity>
)

export { CounterButton }
