import { CounterButton } from '@atoms/counter_button/counter_button'
import { BodyT1 } from '@atoms/text/text'
import { ICounter } from '@models/counter.types'
import { timeout } from '@utils/functions'
import { observer } from 'mobx-react-lite'
import React, { useCallback, useMemo, useRef } from 'react'
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
  const timer = useRef<NodeJS.Timeout>()
  const initialDelay = useCallback(() => timeout(500), [])
  const showError = useMemo(() => !canDecrement || !canIncrement, [canDecrement, canIncrement])

  const onPressInIncrement = async () => {
    await initialDelay()
    timer.current = setTimeout(onIncrement, 100)
  }

  const onPressInDecrement = async () => {
    await initialDelay()
    timer.current = setTimeout(onDecrement, 100)
  }

  const onPressOut = () => {
    clearTimeout(timer.current)
  }

  return (
    <>
      <StyledBody>{value}</StyledBody>
      {showError && <StyledError>You have reached bounds!</StyledError>}
      <Row>
        <DecrementButton
          title="Decrement"
          disabled={!canDecrement}
          onPressIn={onPressInDecrement}
          onPressOut={onPressOut}
        />
        <IncrementButton
          title="Increment"
          disabled={!canIncrement}
          onPressIn={onPressInIncrement}
          onPressOut={onPressOut}
        />
      </Row>
    </>
  )
}
const ObservedCounter = observer(Counter)
export { Counter, ObservedCounter }
