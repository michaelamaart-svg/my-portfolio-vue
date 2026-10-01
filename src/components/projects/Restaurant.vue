<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const isSending = ref(false)
const reservationMessage = ref('')

async function handleReservation(event) {
  const form = event.target
  const formData = new FormData(form)

  isSending.value = true
  reservationMessage.value = ''

  try {
    await emailjs.send(
      'service_ivdzjel',
      'template_yjqlacg',
      {
        to_name: formData.get('name'),
        to_email: formData.get('email'),
        reservation_date: formData.get('date'),
        reservation_time: formData.get('time'),
        guests: formData.get('guests')
      },
      {
        publicKey: 'yQbQZS3J-UqNEE2Fk'
      }
    )

    reservationMessage.value = 'Your reservation has been sent successfully!'
    form.reset()
  } catch (error) {
    console.log('EmailJS Error:', error)
    console.log('Status:', error.status)
    console.log('Text:', error.text)

    reservationMessage.value = error.text || 'Something went wrong. Please try again.'
  }

  isSending.value = false
}
</script>

<template>
  <section class="restaurant-page">

    <header class="restaurant-header">
      <div class="restaurant-logo">
        <span>KAY'S</span>
        <h1>WINE & DINE</h1>
      </div>

      <nav>
        <a href="#restaurant-home">Home</a>
        <a href="#restaurant-about">About</a>
        <a href="#restaurant-menu">Menu</a>
        <a href="#restaurant-reservation">Reservations</a>
      </nav>
    </header>

    <section id="restaurant-home" class="restaurant-hero">

      <div class="restaurant-hero-content">
        <p class="restaurant-small-title">FINE DINING · EST. 2026</p>

        <h2>An Evening<br>Worth Remembering</h2>

        <p>
          Thoughtfully crafted dishes, carefully selected wines
          and an intimate dining experience.
        </p>

        <a href="#restaurant-reservation" class="restaurant-hero-button">
          Reserve a Table
        </a>
      </div>

    </section>

    <section id="restaurant-about" class="restaurant-about">

      <p class="restaurant-section-label">OUR PHILOSOPHY</p>

      <h2>A Table. A Moment. An Experience.</h2>

      <p class="restaurant-about-text">
        At Kay's Wine & Dine, every dish is thoughtfully prepared
        using carefully selected ingredients. Our goal is to create
        memorable evenings through refined flavours, warm hospitality
        and an elegant atmosphere.
      </p>

    </section>

    <section id="restaurant-menu" class="restaurant-menu">

      <div class="restaurant-menu-heading">
        <p class="restaurant-section-label">FROM THE KITCHEN</p>
        <h2>Signature Menu</h2>
        <p>Our chef's selection of carefully crafted dishes.</p>
      </div>

      <div class="restaurant-menu-grid">

        <div class="restaurant-menu-card">
          <div class="restaurant-image">
            <img
              src="https://i.pinimg.com/736x/bd/14/d7/bd14d7b4111a142ce16c917bc5ee69f7.jpg"
              alt="Chef's signature lamb chops"
            >
          </div>

          <div class="restaurant-menu-info">
            <p class="restaurant-dish-type">CHEF'S SIGNATURE</p>
            <h3>Lamb Chops</h3>
            <p>
              Perfectly seared lamb chops served tender and juicy
              with a rich, savoury finish.
            </p>
          </div>
        </div>

        <div class="restaurant-menu-card">
          <div class="restaurant-image">
            <img
              src="https://i.pinimg.com/736x/2a/2f/dc/2a2fdc761607b82677adaee0e469513f.jpg"
              alt="Pan-seared cod with pea purée"
            >
          </div>

          <div class="restaurant-menu-info">
            <p class="restaurant-dish-type">PAN-SEARED</p>
            <h3>Atlantic Cod</h3>
            <p>
              Pan-seared cod served with smooth pea purée and
              fragrant herb oil.
            </p>
          </div>
        </div>

        <div class="restaurant-menu-card">
          <div class="restaurant-image">
            <img
              src="https://i.pinimg.com/736x/2f/f9/af/2ff9aff8e1953fd7e6e9de59b3dca849.jpg"
              alt="Pappardelle with caramelized sea scallops"
            >
          </div>

          <div class="restaurant-menu-info">
            <p class="restaurant-dish-type">HOUSE FAVOURITE</p>
            <h3>Pappardelle</h3>
            <p>
              Wide pappardelle with golden seared scallops and
              roasted red pepper sauce.
            </p>
          </div>
        </div>

      </div>

    </section>

    <section class="restaurant-experience">

      <div class="restaurant-experience-content">
        <p class="restaurant-section-label">THE EXPERIENCE</p>

        <h2>Dinner. Wine. Moments.</h2>

        <p>
          An intimate setting designed for memorable evenings,
          celebrations and everything in between.
        </p>
      </div>

    </section>

    <section id="restaurant-reservation" class="restaurant-reservation">

      <div class="restaurant-reservation-heading">
        <p class="restaurant-section-label">YOUR TABLE AWAITS</p>

        <h2>Reserve Your Table</h2>

        <p>
          Join us for an evening of exceptional food and unforgettable moments.
        </p>
      </div>

      <form
        class="restaurant-reservation-form"
        @submit.prevent="handleReservation"
      >

        <div class="restaurant-form-group">
          <label for="restaurant-name">Full Name</label>

          <input
            type="text"
            id="restaurant-name"
            name="name"
            placeholder="Your name"
            required
          >
        </div>

        <div class="restaurant-form-group">
          <label for="restaurant-email">Email</label>

          <input
            type="email"
            id="restaurant-email"
            name="email"
            placeholder="Your email"
            required
          >
        </div>

        <div class="restaurant-form-group">
          <label for="restaurant-date">Date</label>

          <input
            type="date"
            id="restaurant-date"
            name="date"
            required
          >
        </div>

        <div class="restaurant-form-group">
          <label for="restaurant-time">Time</label>

          <input
            type="time"
            id="restaurant-time"
            name="time"
            required
          >
        </div>

        <div class="restaurant-form-group restaurant-guests">
          <label for="restaurant-guests">Number of Guests</label>

          <select
            id="restaurant-guests"
            name="guests"
            required
          >
            <option value="" disabled selected>
              Select number of guests
            </option>

            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4+">4+ People</option>
          </select>
        </div>

        <button type="submit" :disabled="isSending">
          {{ isSending ? 'Sending...' : 'Book Your Table' }}
        </button>

      </form>

      <p v-if="reservationMessage" class="reservation-message">
        {{ reservationMessage }}
      </p>

    </section>

    <footer class="restaurant-footer">

      <div class="restaurant-footer-logo">
        <span>KAY'S</span>
        <h2>WINE & DINE</h2>
      </div>

      <p>Fine food. Thoughtful details. Unforgettable evenings.</p>

      <div class="project-buttons">

        <button
          type="button"
          class="btn restaurant-back-button"
          @click="$router.back()"
        >
          Back to Projects
        </button>

      </div>

      <p class="restaurant-copyright">
        © 2026 Kay's Wine & Dine
      </p>

    </footer>

  </section>
</template>