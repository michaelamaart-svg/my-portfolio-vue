<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const selectedCategory = ref('All')

const artworks = [
  {
    title: 'Mountain View',
    category: 'Landscape',
    image: 'https://www.lukas-petereit.com/wp-content/uploads/2017/10/Moraine-Lake-Lake-Louise-Ten-Peaks-Snow-Alberta-Banff-National-Park-Rocky-Mountains-Nature-Hike-Photo-Spot-Location-Travel-Roadtrip-Forest-1.jpg',
    caption: 'Beautiful scenery captured in a calm and artistic moment.'
  },
  {
    title: 'Studio Vibes',
    category: 'Portrait',
    image: 'https://img.freepik.com/premium-photo/creative-portrait-with-unique-lighting-editing-effects3_995578-13031.jpg?w=360',
    caption: 'A stylish portrait capturing emotion, color, and creative expression.'
  },
  {
    title: 'Skyline Heights',
    category: 'Architecture',
    image: 'https://ca-times.brightspotcdn.com/dims4/default/76de6c7/2147483647/strip/true/crop/6000x4000+0+143/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F46%2Fe1%2Fa4e5659343b7bbae2a91a45f46b3%2Fet-best-architecture-2025-anderson-towers-00001b.jpg',
    caption: 'A striking high-rise building reflecting the city skyline, blending elegance with modern urban design.'
  },
  {
    title: 'Sunrise Coastal View',
    category: 'Landscape',
    image: 'https://www.lukas-petereit.com/wp-content/uploads/2018/03/Sunrise-at-Santa-Cruz-Madeira-Island.jpg',
    caption: 'The sun rises over the island, casting warm light across the sea and mountains.'
  },
  {
    title: 'Expressive Portrait',
    category: 'Portrait',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_B1DmNuoJnGoh5kf-UhBnsM2a6aHLt3qDw&s',
    caption: 'A portrait focused on facial expression, surrounded by drifting birds and suspended human figures. The minimal colour palette adds a calm and imaginative feeling.'
  },
  {
    title: 'Futuristic Night Scene',
    category: 'Architecture',
    image: 'https://www.lukas-petereit.com/wp-content/uploads/2017/10/Marina-Bay-Sands-Helix-Bridge-Lightshow-Luminale-Purple-Singapore-City-Architecture-Night-Long-Exposure-Light-Urban-Laser-Travel-Photograpy-2.jpg',
    caption: 'A brightly lit bridge shines with purple tones, reflecting across calm water in a modern city setting.'
  },
  {
    title: 'Stone Arch Reflection',
    category: 'Landscape',
    image: 'https://www.lukas-petereit.com/wp-content/uploads/2017/10/Rakotzbr%C3%BCcke-Bridge-Rakotz-Kromlau-Lake-Sun-Sunrise-Landscape-Reflection-Germany-Saxony-Travel-Photography-Nature-Photo-Spreewald-2.jpg',
    caption: 'A curved stone bridge forms a perfect reflection in still water, creating a complete circle effect.'
  },
  {
    title: 'Soft Petal Portrait',
    category: 'Portrait',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzWck-AZc4aZcjRb-QErGSXZbZz0Eybka4g&s',
    caption: 'A calm portrait of a woman in a corset, with flower petals gently falling through the scene. The minimal expression and soft motion create an elegant mood.'
  },
  {
    title: 'Golden Sky Bridge',
    category: 'Architecture',
    image: 'https://www.lukas-petereit.com/wp-content/uploads/2017/10/Golden-Gate-Bridge-San-Francisco-California-USA-Sunset-Fence-America-City-Architecture-Photography-Pacific-Red-Special-Clouds-Fog-Boat-1.jpg',
    caption: 'A massive bridge stands above calm water, surrounded by soft fog and glowing evening clouds.'
  },
  {
    title: 'Blooming Landscape',
    category: 'Landscape',
    image: 'https://www.lukas-petereit.com/wp-content/uploads/2018/08/Lavender-Field-in-Valensole-during-Sunset-Landscapes-of-Provence-France.jpg',
    caption: 'Rows of purple flowers create a peaceful and colorful natural scene under evening light.'
  },
  {
    title: 'Unveiling the Art and Reality',
    category: 'Portrait',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYTTbYOyXSfW1PfmTgqGXLDbKdHt6vts1Qg&s',
    caption: 'A showcase of innovative portrait photography that combines artistic vision with genuine storytelling.'
  },
  {
    title: 'Symmetrical Building in Night Light',
    category: 'Architecture',
    image: 'https://www.lukas-petereit.com/wp-content/uploads/2017/10/Semper-Opera-Semperoper-Dresden-Saxony-Germany-Night-Abstract-Lights-City-Symmetry-Architecture-Urban-Oper-Citylife-2.jpg',
    caption: 'A large architectural landmark glows beautifully at night, with its detailed structure and balanced design enhanced by glowing lights and deep shadows.'
  }
]

const filteredArtworks = computed(() => {
  if (selectedCategory.value === 'All') {
    return artworks
  }

  return artworks.filter(
    artwork => artwork.category === selectedCategory.value
  )
})
</script>

<template>
  <section id="gallery" class="gallery-page">

    <div class="gallery-hero">
      <p>MODERN ART GALLERY</p>

      <h1>Explore the collection</h1>

      <p>
        A responsive gallery website created to showcase modern artwork
        through a clean and interactive design.
      </p>
    </div>

    <div class="gallery-filters">

      <button
        @click="selectedCategory = 'All'"
        :class="{ active: selectedCategory === 'All' }"
        :aria-pressed="selectedCategory === 'All'"
        class="gallery-btn"
      >
        All
      </button>

      <button
        @click="selectedCategory = 'Landscape'"
        :class="{ active: selectedCategory === 'Landscape' }"
        :aria-pressed="selectedCategory === 'Landscape'"
        class="gallery-btn"
      >
        Landscapes
      </button>

      <button
        @click="selectedCategory = 'Portrait'"
        :class="{ active: selectedCategory === 'Portrait' }"
        :aria-pressed="selectedCategory === 'Portrait'"
        class="gallery-btn"
      >
        Portraits
      </button>

      <button
        @click="selectedCategory = 'Architecture'"
        :class="{ active: selectedCategory === 'Architecture' }"
        :aria-pressed="selectedCategory === 'Architecture'"
        class="gallery-btn"
      >
        Architecture
      </button>

    </div>

    <div class="gallery-container">

      <article
        v-for="artwork in filteredArtworks"
        :key="artwork.title"
        class="gallery-card"
      >
        <img
          :src="artwork.image"
          :alt="artwork.title"
          loading="lazy"
        >

        <div class="gallery-card-content">
          <h3>{{ artwork.title }}</h3>

          <span class="gallery-tag">
            {{ artwork.category }}
          </span>

          <p class="gallery-caption">
            {{ artwork.caption }}
          </p>
        </div>

      </article>

    </div>

    <RouterLink to="/#projects" class="btn">
      Back to Projects
    </RouterLink>

  </section>
</template>