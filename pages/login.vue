<template>
  <section>
    <h1 class="p-4 text-center">Login Page</h1>
    <form class="row">
      <div class="mt-3 col-sm-12 col-md-12 col-lg-6">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email">
      </div>
      <div class="mt-3 col-sm-12 col-md-12 col-lg-6">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password">
      </div>
      <NuxtLink class="mt-3" to="/">Home page</NuxtLink>
      <div class="mt-3 col-12">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  layout: 'empty'
}
</script>
