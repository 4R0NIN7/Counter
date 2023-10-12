import { ObservedCounterScreen } from '@organisms/counter_screen/counter_screen'
import { StoreProvider } from '@providers/store_provider/store_provider'
import { StyledComponentsProvider } from '@providers/styled_components_provider/styled_components_provider'
import React from 'react'
import type { ReactElement } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

const Wrapper = styled(View)`
  flex: 1;
`

const App = (): ReactElement => (
  <StoreProvider>
    <StyledComponentsProvider>
      <Wrapper>
        <ObservedCounterScreen />
      </Wrapper>
    </StyledComponentsProvider>
  </StoreProvider>
)

export { App }
