<template>
  <section>
    <h1 class="p-4 text-center">Users Page</h1>
    <ul>
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="openUser(user.id)">Name: {{ user.name }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Users",
  async asyncData({ $axios }) {
    let users = await this.$axios.get('https://jsonplaceholder.typicode.com/users')
    return { users }
  },
  data: () => ({
    users: []
  }),
  methods: {
    openUser(user) {
      this.$router.push("/users/" + user)
    }
  }
}
</script>
