import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './home.vue';
import CreateItem from '../components/CreateItem.vue';
import DisplayItem from '../components/DisplayItem.vue';
import EditItem from '../components/EditItem.vue';
import RegisterLogin from '../register-login/register-login.vue';
import HomeDetails from '../home-details/home-details.vue';


const routes = [
  {
        name: 'CreateItem',
        path: '/create/item',
        component: CreateItem
    },
    {
          name: 'DisplayItem',
          path: '/',
          component: DisplayItem
      },
      {
            name: 'EditItem',
            path: '/edit/:id',
            component: EditItem
        },
        {
            name: 'RegisterLogin',
            path: '/register-login',
            component: RegisterLogin
        },
        {
            name: 'HomeDetails',
            path: '/home-details',
            component: HomeDetails
        }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
