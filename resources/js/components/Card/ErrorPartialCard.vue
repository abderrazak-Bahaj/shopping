<template>
  <small v-if="getCardError[word]"  class="text-danger">
        <span v-for="err in getCardError[word]" :key="err">
           - {{ err }}
        </span>
 </small>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props:['word'],
    computed:{
        ...mapGetters(["getCardError"])
    }
}
</script>

<style>

</style>