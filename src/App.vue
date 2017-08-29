<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { router } from './bootstrap';

export default {
  name: 'app',
  router,
  data() {
    return {
      user: null,
    }
  },
  methods: {
    fetchUser(username) {
      this.$http.get(`/users/${username}`)
      .then((resp) => {
        this.user = resp.data;
        console.log(this.user);
      });
    }
  },
  mounted() {
    this.fetchUser('jsteacat');
  }
}
</script>