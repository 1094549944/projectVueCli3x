
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.


const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const Argu = () => import(/* webpackChunkName: "argu" */ '../views/argu.vue')
const Parent = () => import(/* webpackChunkName: "parent" */ '../views/parent.vue')
const Child = () => import(/* webpackChunkName: "child" */ '../views/child.vue')
const Email = () => import(/* webpackChunkName: "email" */ '../views/email.vue')
const Tel = () => import(/* webpackChunkName: "tel" */ '../views/tel.vue')
let routes = [
  {
    path: '/',
    alias: '/home_page',
    name: 'home',
    component: Home,
    beforeRouteEnter (to, from, next) {
      // ...
      next(vm => {
        console.log(vm)
      })
    },
    beforeRouteLeave (to, from, next) {
      // ... 用户离开这个页面，如果要离开这个页面，给一个提示，是否要离开这个页面加一个判断。如果

      /**
       * const leave = confirm('您确定要离开吗？')
       * if(leave) next()
       * else next(false)
       * 
       */

      console.log(to.name, from.name)

    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: '关于',

    }
  }, {
    path: '/argu/:name',
    component: Argu
  }, {
    path: '/parent',
    component: Parent,
    children: [{
      path: 'child',
      component: Child    /* http://localhost:8081/#/parent/child */
    }]
  }, {
    path: '/named_view',
    components: {
      default: Child,
      email: Email,
      tel: Tel
    }
  }, {
    path: '/main',
    // redirect: '/'
    // redirect: {
    //   name: 'home'
    // }
    redirect: (to) => {
      console.log(to)
      //做一些逻辑判断
      return {
        name: 'home'
      }
    }
  }
]
export default routes

