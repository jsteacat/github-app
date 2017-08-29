<template>
  <div>
    <md-toolbar class="md-medium">
      <md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">GitHub</h2>

      <md-input-container style="flex: 1">
        <md-input placeholder="Поиск по имени"></md-input>
      </md-input-container> 
    </md-toolbar>

    <md-sidenav class="md-left md-fixed" ref="sidebar">
      <md-toolbar class="md-medium">
        <md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title">GitHub</h2>
      </md-toolbar>
    </md-sidenav>

    <div class="main-content">
      <md-layout>
        <router-view></router-view>
      </md-layout>
    </div>
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