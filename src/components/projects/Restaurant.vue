<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="restaurant" class="restaurant-page">

    <div class="restaurant-hero">
      <p>KAY'S WINE & DINE</p>

      <h1>Good food. Good wine. Good moments.</h1>

      <p>
        A modern restaurant website created to showcase a stylish dining
        experience through a clean and welcoming design.
      </p>
    </div>

    <div class="restaurant-content">

      <div class="restaurant-card">
        <h2>About the Restaurant</h2>

        <p>
          Kay's Wine & Dine is a restaurant concept focused on creating
          a stylish and welcoming dining experience.
        </p>
      </div>

      <div class="restaurant-card">
        <h2>My Work</h2>

        <p>
          I designed and developed the website layout, focusing on the
          visual design, structure and user experience.
        </p>
      </div>

    </div>

    <div class="menu-section">

      <p>OUR MENU</p>

      <h2>Something for everyone</h2>

      <div class="menu-container">

        <div class="menu-card">
          <h3>Starters</h3>
          <p>Garlic bread · Bruschetta · Calamari</p>
        </div>

        <div class="menu-card">
          <h3>Main Courses</h3>
          <p>Steak · Pasta · Grilled Chicken</p>
        </div>

        <div class="menu-card">
          <h3>Desserts</h3>
          <p>Cheesecake · Chocolate Brownie · Ice Cream</p>
        </div>

      </div>

    </div>

    <div class="reservation-section">

      <p>RESERVATIONS</p>

      <h2>Book a table</h2>

      <form class="reservation-form">

        <input type="text" placeholder="Your Name">
        <input type="email" placeholder="Your Email">
        <input type="date">
        <input type="number" placeholder="Number of Guests" min="1">

        <button type="button" class="btn">
          Reserve a Table
        </button>

      </form>

    </div>

    <RouterLink to="/#projects" class="btn">
      Back to Projects
    </RouterLink>

  </section>
</template>