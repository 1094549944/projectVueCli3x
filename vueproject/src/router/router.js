
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.


const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const Argu = () => import(/* webpackChunkName: "argu" */ '../views/argu.vue')
const Parent = () => import(/* webpackChunkName: "parent" */ '../views/parent.vue')
const Child = () => import(/* webpackChunkName: "child" */ '../views/child.vue')
let routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
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
  }
]
export default routes