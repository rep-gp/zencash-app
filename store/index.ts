import { getAccessorType } from 'typed-vuex'

// Import all your submodules
// import * as auth from './auth'
import * as ui from './ui'
import * as transactions from './transactions'

// This compiles to nothing and only serves to return the correct type of the accessor
export const AccessorType = getAccessorType({
    modules: {
        ui,
        transactions
    }
})
