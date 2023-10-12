import { IReactionDisposer, reaction } from 'mobx'
import { types } from 'mobx-state-tree'

const delay = 100

const Counter = types
  .model('Counter', {
    value: types.optional(types.number, 0),
  })
  .views((self) => {
    return {
      get canIncrement(): boolean {
        return self.value < 100
      },
      get canDecrement(): boolean {
        return self.value >= 1
      },
    }
  })
  .volatile<{
    autoIncrementerReactor: IReactionDisposer | undefined
    autoDecrementerReactor: IReactionDisposer | undefined
  }>(() => {
    return { autoDecrementerReactor: undefined, autoIncrementerReactor: undefined }
  })
  .actions((self) => {
    return {
      disposeAutoIncrementer(): void {
        if (self.autoIncrementerReactor) {
          self.autoIncrementerReactor()
        }
      },
      disposeAutoDecrementer(): void {
        if (self.autoDecrementerReactor) {
          self.autoDecrementerReactor()
        }
      },
    }
  })
  .actions((self) => {
    return {
      increment() {
        if (!self.canIncrement) return
        self.value += 1
      },
      decrement() {
        if (!self.canDecrement) return
        self.value -= 1
      },
    }
  })
  .actions((self) => {
    return {
      initializeAutoIncrementer(): void {
        self.disposeAutoIncrementer()

        self.autoIncrementerReactor = reaction(
          () => self.value,
          () => self.increment(),
          { delay, fireImmediately: true },
        )
      },
      initializeAutoDecrementer(): void {
        self.disposeAutoDecrementer()

        self.autoDecrementerReactor = reaction(
          () => self.value,
          () => self.decrement(),
          { delay, fireImmediately: true },
        )
      },
    }
  })

export { Counter }
