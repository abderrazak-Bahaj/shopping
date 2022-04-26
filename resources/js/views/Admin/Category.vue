<template>
  <div class="row">
    <div class="col-md-6">
      <add-category  v-if="!isEditAction"/>
      <edit-category  :category="category" v-else/>
    </div>
    <div class="col-md-6">
      <list-category />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddCategory from "../../components/Category/AddCategory.vue";
import EditCategory from "../../components/Category/EditCategory.vue";
import ListCategory from "../../components/Category/ListCategory.vue";
export default {
  data() {
    return {
      isEditAction: false,
      category: "",
    };
  },
  components: { ListCategory, AddCategory, EditCategory },
  computed: {
    ...mapGetters(["findCategory"]),
  },
  created() {
    this.$watch(() => this.$route.params,() => {
         if (this.$route.query?.edit != undefined)
          {
            this.category = this.findCategory(this.$route.query.edit);
            this.isEditAction = true;
          }
      },
      { immediate: true }
    )
  },
};
</script>

<style >
.cls-container-cat {
  background-color: #efefef;
  border-radius: 10px;
}
</style>