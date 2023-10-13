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
  .actions((self) => {
    return {
      setValue(value: number) {
        self.value = value
      },
      increment(firstTime: boolean) {
        if (!self.canIncrement) return
        if (firstTime) {
          setTimeout(() => {
            this.setValue(self.value + 1)
          }, 500)
        } else this.setValue(self.value + 1)
      },
      decrement(firstTime: boolean) {
        if (!self.canDecrement) return
        if (firstTime) {
          setTimeout(() => {
            this.setValue(self.value - 1)
          }, 500)
        } else this.setValue(self.value - 1)
      },
    }
  })

export { Counter }
