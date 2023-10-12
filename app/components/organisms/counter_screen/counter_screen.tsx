import { BodyT1 } from '@atoms/text/text'
import { useAppStore } from '@hooks/stores/stores'
import { observer } from 'mobx-react-lite'
import { Button, View } from 'react-native'
import styled from 'styled-components/native'

const Wrapper = styled(View)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`

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

const CounterScreen = () => {
  const {
    counter: { value },
  } = useAppStore()

  const onPress = () => {}

  return (
    <Wrapper>
      <Row>
        <DecrementButton title="Decrement" onPress={onPress} />
        <StyledBody>{value}</StyledBody>
        <IncrementButton title="Decrement" onPress={onPress} />
      </Row>
    </Wrapper>
  )
}

const ObservedCounterScreen = observer(CounterScreen)

export { ObservedCounterScreen, CounterScreen }
