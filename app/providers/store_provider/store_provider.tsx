import { AppStore } from '@stores/app_store'
import { IAppStore } from '@stores/app_store.types'
import React, { ReactNode, createContext, ReactElement, useState } from 'react'

type TStoreProviderProps = {
  children: ReactNode
}

const StoreContext = createContext<IAppStore>({} as IAppStore)

const StoreProvider = ({ children }: TStoreProviderProps): ReactElement | null => {
  const [appStore, setAppStore] = useState<IAppStore>(AppStore.create({}))

  return <StoreContext.Provider value={appStore}>{children}</StoreContext.Provider>
}

export { StoreContext }

export { StoreProvider }
