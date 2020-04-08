import Vue from 'vue';
import VueRouter from 'vue-router';
import addHero from './components/addHero.vue'
import Herois from './components/Herois.vue'
import showHero from './components/showHero.vue'
import unicoHeroi from './components/unicoHeroi.vue'
import EditHero from './components/EditHero.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Herois
        },{
            path: '/add',
            component: addHero
        },{
            path: '/herois',
            component: showHero
        },{
            path: '/hero/:id',
            name: 'unicoHeroi',
            component: unicoHeroi,
            children: [
                {
                    path: 'edit',
                    name: 'edit-hero',
                    component: EditHero
                }
            ]
        }
      
    ]
});