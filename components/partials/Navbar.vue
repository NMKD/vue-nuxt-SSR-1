<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nuxt SSR</a>
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink prefetch active-class="active" class="nav-link active" to="/">
              Home
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" active-class="active" to="/about">
              About
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" active-class="active" to="/users">
              Users
            </NuxtLink>
          </li>
          <li class="nav-item" v-if="!hasToken">
            <NuxtLink class="nav-link" active-class="active" target="_blank" to="/login">
              Login
            </NuxtLink>
          </li>
          <li class="nav-item" v-else>
            <a href="#" class="nav-link" @click.prevent="logout">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
