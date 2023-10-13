import { CounterButton } from '@atoms/counter_button/counter_button'
import { BodyT1 } from '@atoms/text/text'
import { ICounter } from '@models/counter.types'
import { observer } from 'mobx-react-lite'
import React, { useCallback, useMemo, useRef, useState } from 'react'
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
  canIncrement: boolean
  canDecrement: boolean
  value: ICounter['value']
}
const Counter = ({ onIncrement, onDecrement, value, canIncrement, canDecrement }: TCounterProps) => {
  const timer = useRef<NodeJS.Timeout>()
  const [firstTime, setFirstTime] = useState(true)
  const showError = useMemo(() => !canDecrement || !canIncrement, [canDecrement, canIncrement])

  const onPressInIncrement = useCallback(() => {
    onIncrement(firstTime)
    setFirstTime(false)
    timer.current = setTimeout(onPressInIncrement, 100)
  }, [firstTime, onIncrement])

  const onPressInDecrement = useCallback(() => {
    onDecrement(firstTime)
    setFirstTime(false)
    timer.current = setTimeout(onPressInDecrement, 100)
  }, [firstTime, onDecrement])

  const onPressOut = () => {
    clearTimeout(timer.current)
    timer.current = undefined
    setFirstTime(true)
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
