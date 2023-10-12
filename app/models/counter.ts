import { types } from 'mobx-state-tree'

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
        return self.value >= 0
      },
    }
  })
  .actions((self) => {
    return {
      increment: () => {
        if (!self.canIncrement) return
        self.value += 1
      },
      decrement: () => {
        if (!self.canDecrement) return
        self.value += 1
      },
    }
  })

export { Counter }
