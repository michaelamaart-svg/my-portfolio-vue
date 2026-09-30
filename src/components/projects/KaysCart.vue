<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="kays-cart" class="kays-cart-page">

    <div class="kays-cart-hero">
      <p>PERSONAL PROJECT · PWA</p>

      <h1>Kay's Cart</h1>

      <p>
        A personal shopping list and budget tracker designed to make
        everyday shopping easier and help keep spending organised.
      </p>
    </div>

    <div class="kays-cart-content">

      <div class="kays-cart-card">
        <h2>Shopping List</h2>

        <p>
          Add shopping items and keep track of what you need while
          you're out shopping.
        </p>
      </div>

      <div class="kays-cart-card">
        <h2>Budget Tracker</h2>

        <p>
          Keep an eye on your spending and organise your shopping
          around your budget.
        </p>
      </div>

      <div class="kays-cart-card">
        <h2>Progressive Web App</h2>

        <p>
          Designed as a mobile-friendly PWA that can be installed
          and used like an app.
        </p>
      </div>

    </div>

    <div class="kays-cart-features">

      <p>PROJECT FEATURES</p>

      <h2>Made for everyday shopping</h2>

      <div class="kays-cart-list">

        <div>
          <h3>Shopping List</h3>
          <p>Add and organise the items you need to buy.</p>
        </div>

        <div>
          <h3>Budget</h3>
          <p>Track your planned spending while shopping.</p>
        </div>

        <div>
          <h3>Mobile Friendly</h3>
          <p>Designed to work comfortably on a phone.</p>
        </div>

        <div>
          <h3>Offline Support</h3>
          <p>Built as a PWA with offline functionality.</p>
        </div>

      </div>

    </div>

    <div class="project-buttons">

      <a
        href="https://stately-crostata-5ffc78.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="btn"
      >
        View Live App
      </a>

      <RouterLink to="/#projects" class="btn">
        Back to Projects
      </RouterLink>

    </div>

  </section>
</template>