import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todos from '@/components/Todos'
import TodosOld from '@/components/TodosOld'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/old', component: TodosOld},
    {path: '/links', component: HelloWorld},
    // filter param is optional
    {path: '/:filter?', component: Todos}
  ]
})
