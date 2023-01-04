<template>
  <div>
    <Navbar />
    <main>
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>


<script>
import Navbar from '../components/partials/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>

