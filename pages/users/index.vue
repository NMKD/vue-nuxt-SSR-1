<template>
  <section>
    <h1 class="p-4 text-center">{{ pageTitle }}</h1>
    <ul>
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="openUser(user.id)">{{ user.name }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Users",
  middleware: ['auth'],
  async fetch({ store }) {
    try {
      if (store.getters["users/users"].length === 0) {
        await store.dispatch("users/fetch")
      }
    } catch (e) {
      console.log(e)
    }
  },
  data: () => ({
    pageTitle: "Users page"
  }),
  computed: {
    users() {
      return this.$store.getters["users/users"]
    }
  },
  methods: {
    openUser(user) {
      this.$router.push("/users/" + user)
    }
  }
}
</script>
