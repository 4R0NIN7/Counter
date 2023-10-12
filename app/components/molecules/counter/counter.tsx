import { BodyT1 } from '@atoms/text/text'
import { ICounter } from '@models/counter.types'
import React from 'react'
import { View, Button } from 'react-native'
import styled from 'styled-components'

const Row = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const IncrementButton = styled(Button)`
  background-color: red;
`

const DecrementButton = styled(Button)`
  background-color: orange;
`

const StyledBody = styled(BodyT1)`
  color: black;
  font-weight: 700;
`

type TCounterProps = {
  increment: ICounter['increment']
  decrement: ICounter['decrement']
  value: ICounter['value']
}
const Counter = ({ increment, decrement, value }: TCounterProps) => {
  return (
    <Row>
      <DecrementButton title="Decrement" onPress={increment} />
      <StyledBody>{value}</StyledBody>
      <IncrementButton title="Decrement" onPress={decrement} />
    </Row>
  )
}

export { Counter }
