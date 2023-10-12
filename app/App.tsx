import { ObservedCounterScreen } from '@organisms/counter_screen/counter_screen'
import { StoreProvider } from '@providers/store_provider/store_provider'
import { StyledComponentsProvider } from '@providers/styled_components_provider/styled_components_provider'
import React from 'react'
import type { PropsWithChildren } from 'react'
import { View, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import styled from 'styled-components/native'

const Wrapper = styled(View)`
  flex: 1;
`

type SectionProps = PropsWithChildren<{
  title: string
}>

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <StoreProvider>
      <StyledComponentsProvider>
        <Wrapper>
          <ObservedCounterScreen />
        </Wrapper>
      </StyledComponentsProvider>
    </StoreProvider>
  )
}

export default App

