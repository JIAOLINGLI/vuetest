import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/index'
import index from '@/views/index/index'
import home from '@/views/home/index'
import productPrice from '@/views/productPrice/index'
import aboutUs from '@/views/aboutUs/index'
import helpCenter from '@/views/helpCenter/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      redirect:'/home',
     children:[{
      path: '/home',
      name: 'home',
      meta:{title:'首页'},
      component: home
    },
    {
    	path:'/productPrice',
      meta:{title:'产品价格'},
    	component:productPrice
    },
    {
    	path:'/aboutUs',
      meta:{title:'关于我们'},
    	component:aboutUs
    },
    {
    	path:'/helpCenter',
      meta:{title:'帮助中心'},
    	component:helpCenter
    }],
//    children:[{
//    	path:'/children',
//    	name:'children',
//    	component:child
//    },{
//    	path:'/index2',
//    	name:'index2',
//    	component:index2
//    },{
//    	path:'/demo',
//    	name:'demo',
//    	component:demo
//    },{
//    	path:'/demo2',
//    	name:'demo2',
//    	component:demo2
//    }],
      component: index
    }
  ]
})
