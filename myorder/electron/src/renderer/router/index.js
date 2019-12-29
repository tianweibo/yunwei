import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: require('@/components/Home').default
	},
	{
		path: '/user',
		name: 'user',
		component: require('@/components/User/User').default
	},
	{
		path: '/authority',
		name: 'authority',
		component: require('@/components/Authority/Authority').default
	},
	{
		path: '/funcs',
		name: 'funcs',
		component: require('@/components/Funcs/Funcs').default
	},
	{
		path: '/new',
		name: 'new',
		component: require('@/components/New').default
	},
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
