import Vue from 'vue'
import Vuex from 'vuex'
import projects from './modules/projects'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects
  },
  strict: process.env.NODE_ENV !== 'production'
})
