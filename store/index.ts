import { getAccessorType } from 'typed-vuex'

// Import all your submodules
// import * as auth from './auth'
import * as ui from './ui'

// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
// ...

// This compiles to nothing and only serves to return the correct type of the accessor
export const AccessorType = getAccessorType({
    modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
        ui
    }
})
