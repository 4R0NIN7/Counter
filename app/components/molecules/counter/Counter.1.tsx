import { timeout } from '@utils/functions'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { TCounterProps, StyledBody, StyledError, Row, DecrementButton, IncrementButton } from './counter'

export const Counter = ({ onIncrement, onDecrement, value, canIncrement, canDecrement }: TCounterProps) => {
  const timer = useRef<NodeJS.Timeout>()
  const [isFirstTime, setIsFirstTime] = useState(true)
  const [isHolding, setIsHolding] = useState(true)
  const initialDelay = useCallback(() => timeout(500), [])
  const showError = useMemo(() => !canDecrement || !canIncrement, [canDecrement, canIncrement])

  useEffect(() => {
    if (!isHolding) {
      clearTimeout(timer.current)
      timer.current = undefined
    }
  }, [isHolding])

  const onPressInIncrement = useCallback(async () => {
    if (!isHolding) return
    setIsHolding(true)
    if (isFirstTime) await initialDelay()
    onIncrement()
    setIsFirstTime(false)
    timer.current = setTimeout(onPressInIncrement, 100)
  }, [initialDelay, isFirstTime, isHolding, onIncrement])

  const onPressInDecrement = useCallback(async () => {
    if (!isHolding) return
    setIsHolding(true)
    if (isFirstTime) await initialDelay()
    onDecrement()
    setIsFirstTime(false)
    timer.current = setTimeout(onPressInDecrement, 100)
  }, [initialDelay, isFirstTime, isHolding, onDecrement])

  const onPressOut = useCallback(() => {
    setIsHolding(false)
    setIsFirstTime(true)
    clearTimeout(timer.current)
    timer.current = undefined
  }, [])

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
