import Vue from 'vue'
import lsWatcher from 'vue-storage-watcher'

Vue.use({ ...lsWatcher }, { prefix: 'zencash_' })

// Vue.use({ ...lsWatcher }, { prefix: 'zencash_ss_', stroage: 'session' })
