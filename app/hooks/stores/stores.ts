import { StoreContext } from '@providers/store_provider/store_provider'
import { IAppStore } from '@stores/app_store.types'
import { useContext } from 'react'

const useAppStore = (): IAppStore => useContext(StoreContext)

export { useAppStore }
