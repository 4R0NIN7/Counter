import { useAppStore } from '@hooks/stores/stores'
import { observer } from 'mobx-react-lite'
import { View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { Counter } from '@molecules/counter/counter'

const Wrapper = styled(View)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`

const CounterScreen = () => {
  const {
    counter: { value },
  } = useAppStore()

  const onPress = () => {}

  return (
    <Wrapper>
      <Counter value={value} increment={onPress} decrement={onPress} />
    </Wrapper>
  )
}

const ObservedCounterScreen = observer(CounterScreen)

export { ObservedCounterScreen, CounterScreen }
