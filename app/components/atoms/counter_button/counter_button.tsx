import { BodyT2 } from '@atoms/text/text'
import React from 'react'
import { View, Pressable } from 'react-native'
import styled from 'styled-components/native'

const Container = styled(View)`
  height: 44px;
  width: 128px;
  flexdirection: 'column';
  alignitems: 'center';
  justifycontent: 'center';
`

const Button = styled(View)`
  borderwidth: 3px;
  border-radius: 10px;
  bordercolor: '#111';
`

const TitleButton = styled(BodyT2)`
  color: '#914e4e';
`

type TButtonProps = {
  onPress: () => void
  onPressIn?: () => void
  onPressOut?: () => void
  title: string
  disabled: boolean
}
const CounterButton = ({ onPress, title, onPressIn, onPressOut, disabled }: TButtonProps) => (
  <Container>
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut} disabled={disabled}>
      <Button>
        <TitleButton>{title}</TitleButton>
      </Button>
    </Pressable>
  </Container>
)

export { CounterButton }
