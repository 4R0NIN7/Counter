import { Icon } from '@rneui/base'
import React from 'react'
import { View, Pressable } from 'react-native'
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
  <Container>
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut} disabled={disabled} hitSlop={5}>
      <Icon name={title === 'Increment' ? 'plus-one' : 'exposure-minus-1'} size={30} color="black" />
    </Pressable>
  </Container>
)

export { CounterButton }
