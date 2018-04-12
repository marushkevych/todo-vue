import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todos from '@/components/Todos'
import TodosOld from '@/components/TodosOld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todos',
      component: Todos
    },
    {
      path: '/old',
      name: 'old',
      component: TodosOld
    },
    {
      path: '/links',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
