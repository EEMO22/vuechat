import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chat from '@/components/chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/channel/:cname',
      name: 'channel',
      component: Chat
    }
  ]
})
