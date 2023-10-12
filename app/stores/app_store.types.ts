import { AppStore } from '@stores/app_store'
import { Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree'

export interface IAppStore extends Instance<typeof AppStore> {}
export interface IAppStoreSnapshotIn extends SnapshotIn<typeof AppStore> {}
export interface IAppStoreSnapshotOut extends SnapshotOut<typeof AppStore> {}
