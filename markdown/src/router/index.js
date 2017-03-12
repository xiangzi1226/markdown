import Vue from 'vue'
import Router from 'vue-router'
import index from "../components/index"  
import edit from "../components/edit"
import list from "../components/list"
import doc_detail from "../components/content"
import newDoc from "../components/new"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
     {
      path: '/edit/:doc_name',
      name: 'edit',
      component: edit
    },
    {   
        path: '/content/:doc_name',
        name:'content',
        component: doc_detail
    },
     {   
        path: '/list/:type_id',
        name:'list',
        component: list
    },
     {   
        path: '/newDoc',
        name:'newDoc',
        component: newDoc
    }

  ]
})
// const router = new VueRouter({      //你就当const是var  
//   routes  
// //（缩写）相当于 routes: routes  
// })  
  
// 4. 创建和挂载根实例。  
// 记得要通过 router 配置参数注入路由，  
// 从而让整个应用都有路由功能  
// const app = new Vue({  
//   router  
// }).$mount('#app')  
// // 现在，应用已经启动了！  
