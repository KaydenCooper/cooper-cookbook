<template>
  <div class="recipesPage row container-fluid justify-content-center text-center table-bg">
    <div class="col-12 mt-2">
      <h1><u>ALL RECIPES</u></h1>
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
