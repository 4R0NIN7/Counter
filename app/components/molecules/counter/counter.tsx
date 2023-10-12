import { CounterButton } from '@atoms/counter_button/counter_button'
import { BodyT1 } from '@atoms/text/text'
import { ICounter } from '@models/counter.types'
import { timeout } from '@utils/functions'
import { observer } from 'mobx-react-lite'
import React, { useCallback, useMemo } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

const Row = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
`

const IncrementButton = styled(CounterButton)`
  background-color: red;
`

const DecrementButton = styled(CounterButton)`
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
  initializeAutoIncrementer: ICounter['initializeAutoIncrementer']
  disposeAutoIncrementer: ICounter['disposeAutoIncrementer']
  initializeAutoDecrementer: ICounter['initializeAutoDecrementer']
  disposeAutoDecrementer: ICounter['disposeAutoDecrementer']
  canIncrement: boolean
  canDecrement: boolean
  value: ICounter['value']
}
const Counter = ({
  onIncrement,
  onDecrement,
  value,
  canIncrement,
  canDecrement,
  initializeAutoIncrementer,
  disposeAutoIncrementer,
  initializeAutoDecrementer,
  disposeAutoDecrementer,
}: TCounterProps) => {
  const initialDelay = useCallback(() => timeout(500), [])

  const onPressIncrement = async () => {
    await initialDelay()
    onIncrement()
  }
  const onPressDecrement = async () => {
    await initialDelay()
    onDecrement()
  }
  const onPressInIncrement = async () => {
    await initialDelay()
    initializeAutoIncrementer()
  }
  const onPressOutIncrement = () => {
    disposeAutoIncrementer()
  }

  const onPressInDecrement = async () => {
    await initialDelay()
    initializeAutoDecrementer()
  }
  const onPressOutDecrement = () => {
    disposeAutoDecrementer()
  }
  const showError = useMemo(() => !canDecrement || !canIncrement, [canDecrement, canIncrement])
  return (
    <>
      <StyledBody>{value}</StyledBody>
      {showError && <StyledError>You have reached bounds!</StyledError>}
      <Row>
        <DecrementButton
          title="Decrement"
          onPress={onPressDecrement}
          disabled={!canDecrement}
          onPressIn={onPressInDecrement}
          onPressOut={onPressOutDecrement}
        />
        <IncrementButton
          title="Increment"
          onPress={onPressIncrement}
          disabled={!canIncrement}
          onPressIn={onPressInIncrement}
          onPressOut={onPressOutIncrement}
        />
      </Row>
    </>
  )
}
const ObservedCounter = observer(Counter)
export { Counter, ObservedCounter }
