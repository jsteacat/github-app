<template>
  <div>
    <md-toolbar class="md-medium">
      <md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">GitHub</h2>

      <md-input-container style="flex: 1">
        <md-input 
          placeholder="Поиск по имени"
          v-model="username"></md-input>
      </md-input-container> 
    </md-toolbar>

    <md-sidenav class="md-left md-fixed" ref="sidebar">
      <md-toolbar class="md-medium">
        <md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title">GitHub</h2>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <router-link :to="{ name: 'repositories' }">Repos</router-link>
        </md-list-item>
        <md-list-item>
          <router-link :to="{ name: 'user' }">User</router-link>
        </md-list-item>
      </md-list>
      
    </md-sidenav>

    <div class="main-content">
      <md-layout>
        <router-view></router-view>
      </md-layout>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { router } from './bootstrap';

export default {
  name: 'app',
  router,
  data() {
    return {
      user: null,
      username: null,
      repos: []
    }
  },
  methods: {
    fetchUser(username) {
      this.$http.get(`/users/${username}`)
      .then(({ data }) => {
        this.user = data;
        console.log(this.user);
      });
    },
    fetchRepos(username) {
      this.$http.get(`/users/${username}/repos`)
      .then(({ data }) => {
        this.repos = data;
        console.log(this.repos);
      });
    },
    setUsername: _.debounce(function(username) {
      if(username) {
        this.fetchUser(username);
        this.fetchRepos(username);
      } else {
        this.user = null;
        this.repos = [];
      }
      
    }, 1000)
  },
  watch: {
    username(value) {
      this.setUsername(value);
    }
    
  }
}
</script>