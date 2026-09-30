<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const recipeName = ref('')
const showRecipe = ref(false)
const recipe = ref(null)
const imagePreview = ref('')

function handleImageUpload(event) {
  const file = event.target.files[0]

  if (file) {
    imagePreview.value = URL.createObjectURL(file)
  }
}

function removeImage() {
  imagePreview.value = ''
}

function generateRecipe() {
  const input = recipeName.value.toLowerCase()

  if (input.includes('chicken')) {
    recipe.value = {
      title: 'Creamy Garlic Chicken',
      ingredients: 'Chicken · Cream · Garlic · Parmesan · Black Pepper',
      method: 'Cook the chicken until golden. Prepare the creamy garlic sauce, then combine everything and season to taste.'
    }
  } else if (input.includes('pizza')) {
    recipe.value = {
      title: 'Easy Homemade Pizza',
      ingredients: 'Pizza dough · Tomato sauce · Mozzarella · Basil · Olive Oil',
      method: 'Spread the tomato sauce over the dough, add mozzarella and basil, then bake until the crust is golden and the cheese is melted.'
    }
  } else if (input.includes('salad')) {
    recipe.value = {
      title: 'Fresh Garden Salad',
      ingredients: 'Lettuce · Tomato · Cucumber · Avocado · Feta · Dressing',
      method: 'Chop the vegetables, add the avocado and feta, then toss everything together with your favourite dressing.'
    }
  } else {
    recipe.value = {
      title: 'Creamy Pasta',
      ingredients: 'Pasta · Cream · Garlic · Parmesan · Black Pepper',
      method: 'Cook the pasta until tender. Prepare the creamy sauce with garlic and parmesan, then combine everything and season to taste.'
    }
  }

  showRecipe.value = true
}
</script>

<template>
  <section id="recipe-ai" class="recipe-page">

    <div class="recipe-hero">
      <p>RECIPEAI</p>

      <h1>Create your next recipe</h1>

      <p>
        Upload a food image or enter a meal idea to get a simple recipe suggestion.
      </p>
    </div>

    <div class="recipe-box">

      <h2>What are you in the mood for?</h2>

      <label class="upload-box">
        <input
          type="file"
          accept="image/*"
          @change="handleImageUpload"
        >

        <span v-if="!imagePreview">
          📷 Click to Upload Food Image
        </span>

        <img
          v-if="imagePreview"
          :src="imagePreview"
          alt="Uploaded food"
          class="recipe-image"
        >
      </label>

      <button
        v-if="imagePreview"
        type="button"
        class="remove-image"
        @click="removeImage"
      >
        Remove Image
      </button>

      <input
        v-model="recipeName"
        type="text"
        placeholder="Or enter an ingredient or meal"
      >

      <button
        type="button"
        class="btn"
        @click="generateRecipe"
      >
        Generate Recipe
      </button>

    </div>

    <div
      v-if="showRecipe"
      class="recipe-result"
    >
      <p>YOUR RECIPE</p>

      <h2>{{ recipe.title }}</h2>

      <h3>Ingredients</h3>

      <p>{{ recipe.ingredients }}</p>

      <h3>Method</h3>

      <p>{{ recipe.method }}</p>
    </div>

    <RouterLink to="/#projects" class="btn">
      Back to Projects
    </RouterLink>

  </section>
</template>