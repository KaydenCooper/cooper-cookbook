<template>
  <div class="home row justify-content-center px-0 mx-0 table-bg">
    <div class="col-12 mt-md-3 mt-4 ">
      <button class="col-md-3 btn btn-dark btn-lg m-3 p-4 shadow"
              type="button"
              data-toggle="collapse"
              data-target="#collapseAdd"
              aria-expanded="false"
              aria-controls="collapseAdd"
      >
        + Add Recipe
      </button>
      <button class=" col-md-3 btn btn-dark btn-lg m-3 p-4  shadow"
              type="button"
              data-toggle="collapse"
              data-target="#collapseCategory"
              aria-expanded="false"
              aria-controls="collapseCategory"
      >
        Categories
      </button>
      <button @click="allRecipes" class="col-md-3 btn btn-dark btn-lg m-3 p-4  shadow">
        All Recipes
      </button>
    </div>
    <div class="col-12 title collapse" id="collapseCategory">
      <p class="mb-0">
        <u>CATEGORIES</u>
      </p>
    </div>
    <categories
      class="collapse"
      id="collapseCategory"
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
    <form
      @submit.prevent="createRecipe"
      class="collapse col-10 col-md-6 card shadow bg-dark p-4 m-3"
      id="collapseAdd"
    >
      <div class="form-group">
        <label for="inputTitle">Recipe Title</label>
        <input v-model="state.newRecipe.title" type="text" class="form-control" id="inputText" placeholder="Recipe Title...">
      </div>
      <div class="form-group">
        <label for="createdBy">Created By:</label>
        <input v-model="state.newRecipe.createdBy" type="text" class="form-control" id="createdBy" placeholder="Created By...">
      </div>
      <div class="form-group">
        <label for="CategorySelect">Category</label>
        <select v-model="state.newRecipe.category" id="CategorySelect" class="form-control">
          <option selected>
            Choose Category...
          </option>
          <option v-for="category in categories"
                  :key="category.id"
                  :value="category.name"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="inputIngredient">Ingredients</label>
        <textarea v-model="state.newRecipe.ingredients" class="form-control" id="inputIngredient" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="inputDirections">Directions</label>
        <textarea v-model="state.newRecipe.directions" class="form-control" id="inputDirections" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit Recipe
      </button>
    </form>
    <div class="col-12 title  bg-image shadow px-0 py-5 py-md-4 mb-5 mb-md-1">
      <h1 class=" mb-0 my-md-5 py-md-5 text-light title-bg">
        Cooper Family Cookbook <br>
        - Est. 1942 -
      </h1>
    </div>
  </div>
</template>

<script>
import Categories from '../components/Categories.vue'
import { recipeService } from '../services/RecipeService.js'
import { AppState } from '../AppState'
import { computed, onMounted, reactive } from 'vue'
import { router } from '../router.js'
export default {
  name: 'Home',
  setup() {
    const state = reactive({

      newRecipe: {
        title: '',
        createdBy: '',
        category: '',
        ingredients: {},
        directions: ''

      }

    })

    return {
      AppState,
      categories: computed(() => AppState.categories),
      state,
      cancelForm() {
        state.newRecipe = {
          title: '',
          createdBy: '',
          category: '',
          ingredients: '',
          directions: ''
        }
      },
      async createRecipe() {
        try {
          await recipeService.create(state.newRecipe)
          this.cancelForm()
        } catch (error) {
          console.error('You messed up', error)
        }
      },
      allRecipes() {
        router.push('/recipesPage')
      }

    }
  },
  components: { Categories }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');

.title-bg{
    background-color: rgba(36, 36, 36, 0.568);
    border-radius: 0%;
}

.title, h1{
  font-family: 'Amatic SC', cursive;
  font-size: 100px;
}
.home{
  text-align: center;
  user-select: none;
  width: 100vw;
}
.cat{
  font-size: 6.5rem;
  text-shadow: 4.5px 0.75rem 1.05rem ;
}
.shadow{
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.685) !important;
}
.width{
  width: 35rem;
}
.bg-image{
  background-image: url("../assets/img/logo.jpg");
  background-position:inherit;

}
.table-bg{
  background-image: url("../assets/img/table.jpg");
  background-position:inherit;
}

@media only screen and (max-width: 768px) {
.title, h1{
  font-family: 'Amatic SC', cursive;
  font-size: 65px;
}
button{

    width: 93%;
}
}
</style>
