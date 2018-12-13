import Vue from 'vue'
import Router from 'vue-router'
import container from '@/components/index'
import bigShot from '@/components/bigShot/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: "/bigShot",
      component: container
    },
    {
      path: '/bigShot',
      name: 'bigShot',
      component: bigShot
    }
  ]
})
