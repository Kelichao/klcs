import VueRouter from 'vue-router'
import Hello from '~/view/Hello.vue'  //引入根目录下的Hello.vue组件
import vuex from '~/view/vuex.vue'
import person from '~/view/person.vue'  
// import shuiku from '~/view/shuiku/shuiku.vue'  
import edit from '~/view/edit.vue'  
import lunbotu from '~/view/lunbotu.vue'  

import mapSelect from '~/view/demo/mapSelect.vue'  
import pie from '~/view/demo/pie.vue'  
import bar from '~/view/demo/bar.vue'  
import line from '~/view/demo/line.vue'  
import Vue from 'vue'
import tableDemo from '~/view/demo/tableDemo/index.vue'  
import uploadDemo from '~/view/demo/uploadDemo/index.vue'  




var arr = [

  {
    path: '/hello', 
    component: Hello,
    title: "tab组件效率demo",
    meta: { keepAlive: true }
  },
  { path: '/person', meta: { keepAlive: true },component: person,    title: "个人门户", },
  {
    title:"tab组件",
    path: "/vuex", component: vuex,
    meta: { keepAlive: true },//当前的.vue文件需要缓存
  },
  {
    title:"饼图",
    path:"/pie",component:pie,
  },
  {
    title:"柱状图",
    path:"/bar",component:bar,
  },
  {
    title:"折线图",
    path:"/line",component:line,
  },

  {
    title: "编辑信息",
    path: "/edit", component: edit,
  },
  {
    title: "轮播图",
    path: "/lunbotu", component: lunbotu,
  },

  {
    title: "表格demo",
    path: "/tableDemo", component: tableDemo,
  },
  {
      title: "上传demo",
    path: "/uploadDemo", component: uploadDemo,
  },

]
// 2. 定义路由
const router = new VueRouter({routes: arr})

// 插件
Vue.use(VueRouter)

window.routerMap = arr;

// router.push('foo')
export default router;