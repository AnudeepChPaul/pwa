const state = {
	display_name: null
};

const getters = {
    'GET_USER_DATA': (state) => ({
		display_name: state.display_name
	})
};

const mutations = {
    'SET_USER_DATA'(state, {display_name}) {
		state.display_name = display_name;
    }
};

const actions = {
	UPDATE_USER_DATA(store) {
		setTimeout(() => {
			store.commit('SET_USER_DATA', {
				display_name: 'Anudeep'
			});
		}, 2000);
	}
};

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}