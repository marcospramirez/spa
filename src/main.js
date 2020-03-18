// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
import About from './components/About'
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Interests from './components/Interests';
import Project from './components/Project';


import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

Vue.use(VueSimpleMarkdown)

import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faInstagram, faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon);

//tell vue to use the router
Vue.use(VueRouter)
//define your routes
const routes = [
  { path: '/', component: About },
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: ContactMe },
  { path: '/interests', component: Interests },
    {
        path: "/portfolio/:slug",
        name: "project",
        component: Project
    }

]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
                               routes, // short for routes: routes
                               mode: 'history'
                             })
//instatinat the vue instance
new Vue({
//define the selector for the root component
          el: '#app',
          //pass the template to the root component
          template: '<App/>',
          //declare components that the root component can access
          components: { App },
          //pass in the router to the Vue instance
          router
        }).$mount('#app')//mount the router on the app