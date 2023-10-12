import { BodyT1 } from '@atoms/text/text'
import { ICounter } from '@models/counter.types'
import { observer } from 'mobx-react-lite'
import React, { useMemo } from 'react'
import { View, Button } from 'react-native'
import styled from 'styled-components'

const Row = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
`

const IncrementButton = styled(Button)`
  background-color: red;
`

const DecrementButton = styled(Button)`
  background-color: orange;
`

const StyledBody = styled(BodyT1)`
  padding-top: 30%;
  color: black;
`

const StyledError = styled(BodyT1)`
  padding-top: 50%;
  color: red;
`

type TCounterProps = {
  onIncrement: ICounter['increment']
  onDecrement: ICounter['decrement']
  canIncrement: boolean
  canDecrement: boolean
  value: ICounter['value']
}
const Counter = ({ onIncrement, onDecrement, value, canIncrement, canDecrement }: TCounterProps) => {
  const onPressIncrement = () => onIncrement()
  const showError = useMemo(() => !canDecrement || !canIncrement, [canDecrement, canIncrement])
  return (
    <>
      <StyledBody>{value}</StyledBody>
      {showError && <StyledError>You have reached bounds!</StyledError>}
      <Row>
        <DecrementButton title="Decrement" onPress={onDecrement} disabled={!canDecrement} />
        <IncrementButton title="Increment" onPress={onPressIncrement} disabled={!canIncrement} />
      </Row>
    </>
  )
}
const ObservedCounter = observer(Counter)
export { Counter, ObservedCounter }
