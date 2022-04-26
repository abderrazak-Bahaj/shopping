<template>
        <ul class="pagination pagination-lg justify-content-center wrapper ">
            <li class="page-item" v-for="link in links" :key="link.url">
                <router-link class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" :to="link.url" tabindex="-1">
                    {{link.label}}
                </router-link>
            </li>
        </ul>
</template>

<script>
export default {
    props:['links']

}
</script>

<style>

</style>