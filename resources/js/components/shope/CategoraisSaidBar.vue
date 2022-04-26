<template>
    <div class="mt-md-5">
        <h1 class="h2 pb-4 mt-md-5">Categories</h1>
        <ul class="list-unstyled templatemo-accordion">
            <li class="pb-3">
                <ul class="collapse show list-unstyled pl-3">
                    <li v-for="category in categorais" :key="category.id" class="m-md-3">
                        <router-link
                            :to="`/shope/category/${category.id}`" 
                             class="text-decoration-none">
                            {{ category.cat_name }}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["categorais"],
   
};
</script>

<style></style>
