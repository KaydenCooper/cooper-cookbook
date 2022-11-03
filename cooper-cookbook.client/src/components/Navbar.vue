<template>
  <nav class="navbar navbar-expand-lg navbar-light table-bg shadow">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse text-center" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link text-dark navTitle card cuttingboard-bg px-4 my-2 py-0 shadow text-center">
            Cooper Family Cookbook
          </router-link>
        </li>
      </ul>
      <form class="form-inline mr-sm-4 justify-content-center">
        <input class="form-control border border-dark border-radius" type="search" placeholder="Search" aria-label="Search">
        <button class="btn cuttingboard-bg my-2 my-sm-0 border border-rounded border-dark" type="submit">
          Search
        </button>
      </form>
      <!-- <span class="navbar-text">
        <button
          class="btn  cuttingboard-bg border border-dark text-uppercase"
          @click="login"
          v-if="!user.isAuthenticated"
        >
          Login
        </button>

        <button
          class="btn  border border-dark cuttingboard-bg text-uppercase"
          @click="logout"
          v-else
        >
          Logout
        </button>
      </span> -->
    </div>
  </nav>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
.navTitle{
  font-family: 'Amatic SC', cursive;
  font-size:3rem;
}
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
</style>
