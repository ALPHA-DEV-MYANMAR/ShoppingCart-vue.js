import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//Componets
import Home from './views/Home';
import About from './views/About';
import Product from './views/Product';
import Profile from './views/Profile';
import Login from './views/Login';
import ProductDetail from './views/ProductDetail'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {
    path : '/',
    name : 'home',
    component : Home ,
  },
  {
    path : '/product',
    name : 'product',
    component : Product,
  },
  {
    path : '/about',
    name : 'about',
    component : About,
  },
  {
    path : '/profile',
    name : 'profile',
    component : Profile,
    beforeEnter:(to,from,next)=>{
      var key = localStorage.getItem('key');
      if(key === 'email'){
        next();
      }else{
        next('/login')
      }
    }
  },
  {
    path : '/login',
    name : 'login',
    component : Login
  },
  { path: '/product/:id',
    name : 'prodcutdetail',
    component: ProductDetail 
  }
];

const router = new VueRouter({
  mode : 'history',
  routes,
});

// router.beforeEach((to, from, next) => {
//   // ...
// })


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
