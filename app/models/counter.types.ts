import { Counter } from '@models/counter'
import { Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree'

export interface ICounter extends Instance<typeof Counter> {}
export interface ICounterSnapshotIn extends SnapshotIn<typeof Counter> {}
export interface ICounterSnapshotOut extends SnapshotOut<typeof Counter> {}
