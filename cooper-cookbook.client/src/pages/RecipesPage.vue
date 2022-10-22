<template>
  <div class="recipesPage row container-fluid justify-content-center  text-center cuttingboard-bg  px-md-0">
    <div class="col-md-2 col-12 justify-content-center">
      <router-link :to="{ name: 'Home' }" class="nav-link border border-dark font-small mt-4 text-dark navTitle card table-bg px-4 my-2 py-0 shadow text-center">
        Go Back
      </router-link>
    </div>
    <div class="col-12 d-flex justify-content-center align-items-center">
      <h2 class="card shadow border border-dark table-bg px-5 py-2 mt-4  font">
        <u>- Click The Recipe for Details -</u>
      </h2>
    </div>
    <div class="col-md-8 col-12 pr-3 pr-sm-5">
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
