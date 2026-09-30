<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="foodboxx" class="foodboxx-page">

    <div class="foodboxx-hero">
      <p>GROUP PROJECT</p>

      <h1>FoodBoxx</h1>

      <p>
        A food subscription platform designed for students and young
        professionals looking for convenient performance-focused meals.
      </p>
    </div>

    <div class="foodboxx-content">

      <div class="foodboxx-card">
        <h2>My Role</h2>

        <p>
          Backend Developer + QA/Presentation Lead
        </p>

        <p>
          I worked on the backend API, validation, database seeding,
          testing and presentation of the project.
        </p>
      </div>

      <div class="foodboxx-card">
        <h2>Technologies</h2>

        <p>
          Vue 3 · JavaScript · Node.js · Express · MySQL · JWT · bcrypt
        </p>
      </div>

    </div>

    <div class="foodboxx-work">

      <p>MY CONTRIBUTION</p>

      <h2>Backend & QA</h2>

      <div class="foodboxx-list">

        <div>
          <h3>Product API</h3>
          <p>
            Built and worked on product routes, controllers and models
            for retrieving and filtering products.
          </p>
        </div>

        <div>
          <h3>Validation</h3>
          <p>
            Added validation for product data, email addresses,
            passwords, prices and quantities.
          </p>
        </div>

        <div>
          <h3>Database</h3>
          <p>
            Created and maintained the database seed data used for
            testing and development.
          </p>
        </div>

        <div>
          <h3>Testing & QA</h3>
          <p>
            Created a testing checklist and helped test the application
            before the final presentation.
          </p>
        </div>

      </div>

    </div>

    <div class="project-buttons">

      <a
        href="https://group-10-module-3-core-project-production-30a0.up.railway.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="btn"
      >
        View Live FoodBoxx
      </a>

      <RouterLink to="/#projects" class="btn">
        Back to Projects
      </RouterLink>

    </div>

  </section>
</template>