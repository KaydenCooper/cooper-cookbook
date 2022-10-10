<template>
  <div class="recipesPage row container-fluid justify-content-center  text-center table-bg  px-md-0">
    <div class="col-12 mt-2 d-flex justify-content-center align-items-center">
      <h1 class="card shadow bg-tan px-5 py-2 mt-4 border border-dark">
        <u>- Click The Recipe for Details -</u>
      </h1>
    </div>
    <div class="col-md-8 col-12 pr-5 pr-sm-0">
      <recipe
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from 'vue'
import { recipeService } from '../services/RecipeService.js'
import { AppState } from '../AppState'
import Recipe from '../components/Recipe.vue'
import { useRoute } from 'vue-router'
export default {
  name: 'RecipesPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      // recipes: computed(() => AppState.recipe)

    })
    // onMounted(() => {
    //   recipeService.getAll()
    // })
    return {
      state,
      AppState,
      route,
      recipes: computed(() => {
        if (route.params.categoryName === 'all') {
          return AppState.recipe
        } else {
          return AppState.recipe.filter(r => r.category === route.params.categoryName)
        }
      })
    }
  },
  components: { Recipe }
}
</script>

<style scoped>

</style>
