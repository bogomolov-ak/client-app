import VueRouter from 'vue-router'
import Form from './pages/Form.vue'
import Search from './pages/Search.vue'


export default new VueRouter({
    routes: [{
            path: '', //localhost:8081
            component: Form
        },
        {
            path: '/search', //localhost:8081/search
            component: Search
        }
    ],
    mode: 'history'
})