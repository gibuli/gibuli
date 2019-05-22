import Vue from "vue";
import Router from "vue-router";

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router);

/* Layout */
import Layout from "../views/layout/Layout";

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  { path: "/404", component: () => import("@/views/404"), hidden: true },

  {
    path: "/",
    component: Layout,
    redirect: "/quicklayout"
    // name: '常用布局',
    // hidden: true,
    // children: [{
    //   path: 'index',
    //   component: () => import('@/views/quicklayout/index')
    // }]
  },

  {
    path: "/quicklayout",
    component: Layout,
    redirect: "/quicklayout/image-text",
    name: "quicklayout",
    meta: {
      title: "常用布局",
      icon: "nested"
    },
    alwaysShow: true,
    children: [
      {
        path: "image-text",
        name: "Image-Text",
        component: () => import("@/views/quicklayout/image-text"),
        meta: { title: "image-text", icon: "form" }
      }
      // {
      //   path: 'icon-text',
      //   name: 'Icon-Text',
      //   component: () => import('@/views/quicklayout/icon-text'),
      //   meta: { title: 'icon-text', icon: 'form' }
      // }
    ]
  },

  {
    path: "/tools",
    component: Layout,
    children: [
      {
        path: "index",
        name: "常用工具",
        component: () => import("@/views/tools/index"),
        meta: { title: "常用工具", icon: "form" }
      }
    ]
  },

  { path: "*", redirect: "/404", hidden: true }
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
