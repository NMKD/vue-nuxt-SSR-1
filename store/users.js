export const state = () => ({
  users: [],
});

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
};

export const actions = {
  async fetch({ commit }) {
    try {
      const users = await this.$axios.$get(
        "https://jsonplaceholder.typicode.com/users"
      );
      commit('setUsers', users)
    } catch (e) {
      console.log(e);
    }
  },
};

export const getters = {
  users: state => state.users
}
