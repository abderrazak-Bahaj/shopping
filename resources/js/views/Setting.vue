<template>
  <div>
      <div class="row cls-height-saidBar" >
          <div class="col-md-3 h-100 bg-light">
              <said-bar/>
          </div>
          <div class="col-md-9 container">
              <router-view/>
          </div>
      </div>
  </div>
</template>

<script>
import SaidBar from '../components/Global/SaidBar.vue'
export default {
  components: { SaidBar },
 
}
</script>

<style>

</style>