import { styledComponentsTheme } from '@themes/styled_components_theme'
import React, { ReactNode, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components/native'

type TStyledComponentsProviderProps = {
  children: ReactNode
}

const StyledComponentsProvider = ({ children }: TStyledComponentsProviderProps): ReactElement => (
  <ThemeProvider theme={styledComponentsTheme}>{children}</ThemeProvider>
)

export { StyledComponentsProvider }
