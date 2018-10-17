import * as api from '@/api/projects'

const state = {
  projects: []
}

const getters = {}

const actions = {
  getProjects ({ commit } : { commit: Function }) {
    api.getProjects((projects: Array<object>) => {
      commit('setProjects', projects)
    })
  }
}

const mutations = {
  setProjects (state: any, projects: Array<object>) {
    state.projects = projects
  },
  swipe () {
    state.projects.pop()
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
