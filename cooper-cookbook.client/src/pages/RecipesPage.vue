<template>
  <div class="recipesPage row container-fluid justify-content-center text-center table-bg">
    <div class="col-12 mt-2">
      <h1><u>ALL RECIPES</u></h1>
      <recipe
        v-for="recipe in state.recipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { recipeService } from '../services/RecipeService.js'
import { AppState } from '../AppState'
import Recipe from '../components/Recipe.vue'
export default {
  name: 'RecipesPage',
  setup() {
    const state = reactive({
      recipes: computed(() => AppState.recipe)
    })
    onMounted(() => {
      recipeService.getAll()
    })
    return {
      state,
      AppState
    }
  },
  components: { Recipe }
}
</script>

<style scoped>

</style>
