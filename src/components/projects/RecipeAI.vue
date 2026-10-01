<script setup>
import { ref } from 'vue'

const recipeName = ref('')
const imagePreview = ref('')
const showRecipe = ref(false)
const recipe = ref(null)

function handleImageUpload(event) {
  const file = event.target.files[0]

  if (file) {
    imagePreview.value = URL.createObjectURL(file)
  }
}

function generateRecipe() {
  const input = recipeName.value.toLowerCase()

  if (input.includes('chicken')) {
    recipe.value = {
      title: 'Creamy Garlic Chicken',
      ingredients: 'Chicken, Garlic, Butter, Cream, Parmesan, Herbs, Salt, Pepper',
      instructions: [
        'Season the chicken with salt and pepper.',
        'Heat a pan and cook the chicken until golden brown.',
        'Add butter and garlic to the pan.',
        'Add cream and parmesan and let the sauce thicken.',
        'Garnish with herbs and serve.'
      ]
    }
  } else if (input.includes('pizza')) {
    recipe.value = {
      title: 'Easy Homemade Pizza',
      ingredients: 'Pizza dough, Tomato sauce, Mozzarella, Basil, Olive Oil, Salt',
      instructions: [
        'Spread tomato sauce over the pizza dough.',
        'Add mozzarella and your favourite toppings.',
        'Drizzle with a little olive oil.',
        'Bake until the crust is golden and the cheese is melted.',
        'Add fresh basil before serving.'
      ]
    }
  } else if (input.includes('salad')) {
    recipe.value = {
      title: 'Fresh Garden Salad',
      ingredients: 'Lettuce, Tomato, Cucumber, Avocado, Feta, Olive Oil, Lemon',
      instructions: [
        'Wash and chop the vegetables.',
        'Add the vegetables to a large bowl.',
        'Add avocado and feta.',
        'Drizzle with olive oil and lemon juice.',
        'Mix everything together and serve fresh.'
      ]
    }
  } else if (input.includes('steak') || input.includes('beef')) {
    recipe.value = {
      title: 'Garlic Butter Steak',
      ingredients: 'Beef Steak, Garlic, Butter, Rosemary, Salt, Black Pepper',
      instructions: [
        'Season the steak with salt and black pepper.',
        'Heat a pan until very hot.',
        'Cook the steak on both sides until your preferred doneness.',
        'Add butter, garlic and rosemary to the pan.',
        'Baste the steak with the garlic butter and serve.'
      ]
    }
  } else if (input.includes('fish') || input.includes('salmon')) {
    recipe.value = {
      title: 'Garlic Lemon Fish',
      ingredients: 'Fish, Garlic, Lemon, Butter, Herbs, Salt, Pepper',
      instructions: [
        'Season the fish with salt and pepper.',
        'Heat butter in a pan.',
        'Cook the fish until golden and cooked through.',
        'Add garlic and lemon juice.',
        'Garnish with fresh herbs and serve.'
      ]
    }
  } else if (input.includes('pasta')) {
    recipe.value = {
      title: 'Creamy Garlic Pasta',
      ingredients: 'Pasta, Cream, Garlic, Parmesan, Butter, Black Pepper',
      instructions: [
        'Cook the pasta until tender.',
        'Melt butter in a pan and add garlic.',
        'Add cream and parmesan.',
        'Add the cooked pasta to the sauce.',
        'Mix well and season with black pepper.'
      ]
    }
  } else {
    recipe.value = {
      title: 'Recipe Suggestion',
      ingredients: 'Try entering chicken, pizza, salad, steak, fish or pasta.',
      instructions: [
        'Enter a food or ingredient in the box above.',
        'Click Generate Recipe.',
        'RecipeAI will create a recipe suggestion for you.'
      ]
    }
  }

  showRecipe.value = true
}
</script>

<template>
  <section class="recipe-page">

    <div class="recipe-app">

      <h1>RecipeAI</h1>

      <p class="recipe-subtitle">
        Upload a food image or enter a meal idea and get a recipe suggestion
      </p>

      <label class="recipe-upload">

        <input
          type="file"
          accept="image/*"
          @change="handleImageUpload"
        >

        <span v-if="!imagePreview">
          📷 Click to Upload Image
        </span>

        <img
          v-if="imagePreview"
          :src="imagePreview"
          alt="Uploaded food"
          class="recipe-upload-image"
        >

      </label>

      <button
        v-if="imagePreview"
        type="button"
        class="recipe-remove"
        @click="imagePreview = ''"
      >
        Remove Image
      </button>

      <input
        v-model="recipeName"
        type="text"
        class="recipe-input"
        placeholder="Or enter a food or ingredient"
      >

      <button
        type="button"
        class="btn recipe-generate"
        @click="generateRecipe"
      >
        Generate Recipe
      </button>

      <div
        v-if="showRecipe"
        class="recipe-result"
      >

        <h2>{{ recipe.title }}</h2>

        <h3>🥗 Ingredients</h3>

        <p>{{ recipe.ingredients }}</p>

        <h3>👨‍🍳 Instructions</h3>

        <ol>
          <li
            v-for="instruction in recipe.instructions"
            :key="instruction"
          >
            {{ instruction }}
          </li>
        </ol>

      </div>

      <button
        type="button"
        class="btn recipe-back-button"
        @click="$router.back()"
      >
        Back to Projects
      </button>

    </div>

  </section>
</template>