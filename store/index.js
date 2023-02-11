export const state = () => ({
  background: null
});

export const mutations = {
  SET_BACKGROUND(state, payload) {
    state.background = payload;
  }
};

export const actions = {
  updateBackground({ commit }, payload) {
    commit('SET_BACKGROUND', payload);
  },
  resetBackground({ commit }) {
    commit('SET_BACKGROUND', null);
  }
};
