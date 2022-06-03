//state
const state = () => ({
        data: {
            type: "",
            message: "",
            isVisible: false,
        }
    }
);

//mutations
const mutations = {
    changeData(state, data) {
        state.data = data;
    },

    changeVisibility(state, isVisible) {
        state.data.isVisible = isVisible;
    }
}

//getters
const getters = {};

//actions
const actions = {
    show({commit}, {type, message}) {
        commit("changeData", {type, message, isVisible: true})
        setTimeout(() =>
                commit("changeVisibility", false)
            , 5000)
    },
}


export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}





