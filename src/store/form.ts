import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    myText: "",
    email: "",
    textarea: "",
    select: "",
    radio: "",
    checkboxes: []
  },
  mutations: {
    clearForm (state) {
      state.myText = "";
      state.email = "";
      state.textarea = "";
      state.select = "";      
      state.email = "";
      state.checkboxes = [];
    },
    updateMyText (state, value) {
        state.myText = value;
    },
    updateEmail (state, value) {
        state.email = value;
    },
    updateTextarea (state, value) {
        state.textarea = value;
    },
    updateSelect (state, value) {
        state.select = value;
    },
    updateRadio (state, value) {
        state.radio = value;
    },
    updateCheckboxes (state, value) {
        state.checkboxes = value;
    }
  }
})