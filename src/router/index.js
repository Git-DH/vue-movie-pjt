import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home';
import BoxOffice from '../views/BoxOffice';
// import BoxOfficeByDay from '../views/BoxOfficeByDay';
// import BoxOfficeByWeek from '../views/BoxOfficeByWeek';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/boxOfficeByDay',
    name: 'boxOfficeByDay',
    component: BoxOffice
  },
  {
    path: '/boxOfficeByWeek',
    name: 'boxOfficeByWeek',
    component: BoxOffice
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
