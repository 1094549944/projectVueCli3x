
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.


const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
  }
]
export default routes