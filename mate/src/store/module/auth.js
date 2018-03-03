import axios from 'axios';

const state = {
	logged_in: false,
	user_id: null
};

const getters = {
    'GET_LOGIN_STATUS': (state) => (state.logged_in),
	
	'GET_LOGGEDIN_USER_ID': (state) => (state.user_id)
};

const mutations = {
    'SET_LOGGED_IN'(state, {status, user_id}) {
		state.logged_in = !!status;
		state.user_id = user_id;
    }
};

const actions = {
    'LOG_IN'(store) {
        axios.get('http://serv.pwa.in/authenticate',{
			username: 'u',
			password: 'p'
		}).then((resp) => {
			var respData = resp.data;

			if(respData.success && respData.data.user_id) {
				store.commit('SET_LOGGED_IN', {
					status: true,
					user_id: respData.data.user_id
				});
			} else {
				store.commit('SET_LOGGED_IN', {
					status: false,
					user_id: null
				});
			}
		});
    },

    'AUTHENTICATE'(store) {
		axios.get('http://serv.pwa.in/authenticate',{
			username: 'u',
			password: 'p'
		}).then((resp) => {
			var respData = resp.data;

			if(respData.success && respData.data.user_id) {
				store.commit('SET_LOGGED_IN', {
					status: true,
					user_id: respData.data.user_id
				});
			}
		});
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}