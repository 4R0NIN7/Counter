import { AppStore } from '@stores/app_store'
import { IAppStore } from '@stores/app_store.types'
import { isEmpty } from 'lodash'
import React, { ReactNode, createContext, ReactElement, useState, useEffect } from 'react'

type TStoreProviderProps = {
  children: ReactNode
}

const StoreContext = createContext<IAppStore>({} as IAppStore)

const StoreProvider = ({ children }: TStoreProviderProps): ReactElement | null => {
  const [appStore, setAppStore] = useState<IAppStore>({} as IAppStore)

  useEffect(() => {
    const store = AppStore.create({})
    setAppStore(store)
  }, [])

  if (isEmpty(appStore)) return null

  return <StoreContext.Provider value={appStore}>{children}</StoreContext.Provider>
}

export { StoreContext }

export { StoreProvider }
