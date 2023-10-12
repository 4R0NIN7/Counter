import { IAppStore } from '@stores/app_store.types'
import { isEmpty } from 'lodash'
import { ReactNode, createContext, ReactElement, useState } from 'react'

type TStoreProviderProps = {
  children: ReactNode
}

const StoreContext = createContext<IAppStore>({} as IAppStore)

const StoreProvider = ({ children }: TStoreProviderProps): ReactElement | null => {
  const [appStore, setAppStore] = useState<IAppStore>({} as IAppStore)

  if (isEmpty(appStore)) return null

  return <StoreContext.Provider value={appStore}>{children}</StoreContext.Provider>
}

export { StoreContext }

export { StoreProvider }
