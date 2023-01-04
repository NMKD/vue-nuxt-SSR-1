<template>
  <section>
    <h1 class="p-4 text-center">{{ user.name }}</h1>
    <hr>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Username: {{ user.username }}</h5>
        <p class="card-text">Company: {{ user.company.name }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ user.email }}</li>
        <li class="list-group-item">{{ user.phone }}</li>
        <li class="list-group-item">{{ user.address.city }}</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">@site: {{ user.website }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "User",
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({ $axios, params }) {
    try {
      let user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id)
      return { user }
    } catch (e) {
      console.log(e)
    }
  },
}
</script>
