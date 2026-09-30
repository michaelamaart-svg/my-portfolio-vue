<script setup>
import { RouterLink } from 'vue-router'
import foodboxxLogo from '../assets/foodboxx-logo.svg'
import kaysCartLogo from '../assets/kays-cart-logo.svg'

const projects = [
  {
    title: "Kay's Wine & Dine",
    type: "Restaurant Website",
    description: "A modern restaurant website with a clean design, menu section and reservation interface.",
    image: "https://media.istockphoto.com/id/1917539042/photo/luxury-restaurant-interior-at-night-with-dining-tables-potted-plants-pendant-lights-and.jpg?s=2048x2048&w=is&k=20&c=b9RHzf6bYE8DI4eEZS0OhxItvWgH8Z7FwjAQVI1bH2g=",
    link: "/projects/restaurant"
  },
  {
    title: "Modern Art Gallery",
    type: "Gallery Website",
    description: "A responsive gallery website featuring artwork, categories and interactive filtering.",
    image: "https://media.istockphoto.com/id/618066222/photo/camera-capturing-a-forest.jpg?s=1024x1024&w=is&k=20&c=Uczlfi3iN08GnKzSq81d6lISYqttMUdnrR1b1JEcNws=",
    link: "/projects/gallery"
  },
  {
    title: "RecipeAI",
    type: "Web Project",
    description: "An AI-inspired recipe generator concept designed around food image uploads and recipe ideas.",
    image: "https://media.istockphoto.com/id/1327819785/photo/cooking-recipe-on-a-tablet-computer.jpg?s=2048x2048&w=is&k=20&c=BPVB2Iy7bS_XSTj15u6nbgkU0QL4Z5PNMUSJSRgVGsE=",
    link: "/projects/recipe-ai"
  },
  {
    title: "FoodBoxx",
    type: "Group Project",
    description: "A food subscription platform built as a group project. I contributed to the backend, product API, validation, database seeding, testing and presentation.",
    image: foodboxxLogo,
    link: "/projects/foodboxx"
  },
  {
    title: "Kay's Cart",
    type: "Personal PWA",
    description: "A personal shopping list and budget tracker designed to help organise shopping and everyday spending.",
    image: kaysCartLogo,
    link: "/projects/kays-cart"
  }
]
</script>

<template>
  <section id="projects">
    <p>MY WORK</p>

    <h2>Projects</h2>

    <div class="project-container">

      <div
        v-for="project in projects"
        :key="project.title"
        class="project-card"
      >

        <img
          :src="project.image"
          :alt="project.title"
          class="project-image"
        >

        <span class="project-type">{{ project.type }}</span>

        <h3>{{ project.title }}</h3>

        <p>{{ project.description }}</p>

        <RouterLink :to="project.link" class="btn">
          View Project
        </RouterLink>

      </div>

    </div>
  </section>
</template>