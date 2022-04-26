<template>
  <div>
  
    <!-- User Part-->
    <div >
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link link-dark cls-hover" aria-current="page"><i class="fa-solid fa-user-pen"></i> Profile </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/editpassword" class="nav-link link-dark cls-hover"><i class="fa-solid fa-lock"></i> Edit password</router-link>
        </li>
        <li>
          <router-link to="/order" class="nav-link link-dark cls-hover"><i class="fa-solid fa-clock-rotate-left"></i> Orders</router-link>
        </li>
        <li>
          <router-link to="/card" class="nav-link link-dark cls-hover"><i class="fa-solid fa-credit-card"></i> Card</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userIsAdmin"]),
  },
};
</script>

<style>
</style>