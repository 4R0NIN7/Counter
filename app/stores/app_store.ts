import Counter from '@models/counter'
import { types } from 'mobx-state-tree'

const AppStore = types.model('AppStore', {
    counter: types.optional(Counter, {})
})

export default AppStore
