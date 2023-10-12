import { useAppStore } from '@hooks/stores/stores'
import { observer } from 'mobx-react-lite'
import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { ObservedCounter } from '@molecules/counter/counter'

const Wrapper = styled(View)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`

const CounterScreen = () => {
  const {
    counter: { value, increment, canDecrement, canIncrement },
  } = useAppStore()

  const onPress = () => {}
  return (
    <Wrapper>
      <ObservedCounter
        value={value}
        onIncrement={increment}
        onDecrement={onPress}
        canIncrement={canIncrement}
        canDecrement={canDecrement}
      />
    </Wrapper>
  )
}

const ObservedCounterScreen = observer(CounterScreen)

export { ObservedCounterScreen, CounterScreen }
