import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import UserInfo from './pages/UserInfo.vue'
export default createRouter ({
    history: createWebHashHistory(),
    // 전환 페이지 설정 
    routes: [
      {
        path:'/',
        component: Home
      },
      {
        path:'/User',
        component: UserInfo
      }
    ]
  })