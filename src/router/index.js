import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')),'home')
      },{
        path: '',
        component: r => require.ensure([], () => r(require('../page/item')),'item')
      },{
        path: '',
        component: r => require.ensure([], () => r(require('../page/score')),'score')
      }]
    }
  ]
})
