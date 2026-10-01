import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Restaurant from '../components/projects/Restaurant.vue'
import Gallery from '../components/projects/Gallery.vue'
import RecipeAI from '../components/projects/RecipeAI.vue'
import FoodBoxx from '../components/projects/Foodboxx.vue'
import KaysCart from '../components/projects/KaysCart.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/projects/restaurant',
    component: Restaurant
  },
  {
    path: '/projects/gallery',
    component: Gallery
  },
  {
    path: '/projects/recipe-ai',
    component: RecipeAI
  },
  {
    path: '/projects/foodboxx',
    component: FoodBoxx
  },
  {
    path: '/projects/kays-cart',
    component: KaysCart
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return { top: 0 }
  }
})

export default router