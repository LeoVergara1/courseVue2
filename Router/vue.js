
// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: html }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})
const app = new Vue({
  router
}).$mount('#app')

var app1 = new Vue({
  data: {
    primero: 0,
    segundo: 0,
    tercero: 0,
    cuarto: 0,
    suma: 0,
  },
  computed: {
    total: function () {
      return  this.suma = this.primero + this.segundo +1
    }
  },
  router

}).$mount('#vm')