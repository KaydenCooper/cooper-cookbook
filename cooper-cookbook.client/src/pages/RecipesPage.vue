<template>
  <div class="recipesPage row container-fluid justify-content-center  text-center table-bg  px-0">
      <div class="col-12 title  bg-image shadow px-0 py-5  mb-5">
      <h1 class=" mb-0 my-md-5 py-md-4 text-light title-bg ">
       
          <router-link :to="{ name: 'Home' }" class="text-light  cooper">
            Cooper Family Cookbook
          </router-link>
        
        
        
      </h1>
      
    </div>
    <div class="col-12 d-flex justify-content-center align-items-center">
      <h2 class="card shadow border border-dark black-bg px-5 py-2 mt-4  font">
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
          return AppState.recipe.sort((a, b) => a.title.localeCompare(b.title))
        } else {
          return AppState.recipe.filter(r => r.category === route.params.categoryName).sort((a, b) => a.title.localeCompare(b.title))
        }
      })
    }
  },
  components: { Recipe }
}
</script>

<style scoped>

</style>
