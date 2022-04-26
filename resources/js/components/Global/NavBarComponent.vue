<template>
  <nav
    class="navbar navbar-expand-lg navbar-light shadow p-4 mb-3"
    style="background-color: transparent"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand text-success logo h2 align-self-center" aria-current="page"
      >Shope Store</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active fs-5" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/shope" class="nav-link fs-5">Shope</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link fs-5">About</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/contact" class="nav-link fs-5">Contact</router-link>
          </li>
        </ul>
      <nav-login-partial/>
      </div>
    </div>
  </nav>
</template>
<script>
import NavLoginPartial from "./NavLoginPartial.vue";
export default {
  components: { NavLoginPartial },
};
</script>
<style scoped>

#templatemo_nav_top { min-height: 40px;}
#templatemo_nav_top * { font-size: .9em !important;}
#templatemo_main_nav a { color: #212934;}
#templatemo_main_nav a:hover { color: #69bb7e;}
#templatemo_main_nav .navbar .nav-icon { margin-right: 20px;}
</style>