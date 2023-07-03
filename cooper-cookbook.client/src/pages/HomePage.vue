<template>
  <div class="home row justify-content-center px-0 mx-0 table-bg">
    <div class="col-12 title  bg-image shadow px-0 py-5  mb-5">
      <h1 class=" mb-0 my-md-5 py-md-4 text-light title-bg">
       
          <router-link :to="{ name: 'Home' }" class="text-light  cooper">
            Cooper Family Cookbook
          </router-link>
        
        
        
      </h1>
      
    </div>
    <button class="col-md-5 btn black-bg btn-lg mb-5 mx-3 font p-3 shadow border border-dark"
                type="button"
                data-toggle="collapse"
                data-target="#collapseAdd"
                aria-expanded="false"
                aria-controls="collapseAdd"
        >
          <h2>+ Add New Recipe</h2>
        </button>

    <!-- <button class="col-md-3 btn black-bg btn-lg mb-5 mx-3 font p-3 shadow border border-dark"
                type="button"
                data-toggle="collapse"
                data-target="#collapseSearch"
                aria-expanded="false"
                aria-controls="collapseAdd"
        >
          <h2>Search</h2>
        </button>     -->

        <button @click="allRecipes" class="col-md-5 btn black-bg font btn-lg mb-5 mx-3 p-3  shadow border border-dark">
          <h2> All Recipes A-Z </h2>
        </button>
  <div id="parent" class="col-10 col-md-6 px-0">
    <form
      @submit.prevent="createRecipe"
      class=" collapse card shadow black-bg p-3 p-md-4 mb-4 border border-dark"
      id="collapseAdd"
      data-parent="#parent"
    >
      <div class="form-group">
        <label for="inputTitle" class="font">Recipe Title</label>
        <input v-model="state.newRecipe.title" type="text" class="form-control border border-dark" id="inputText" placeholder="Recipe Title...">
      </div>
      <div class="form-group">
        <label for="createdBy" class="font">Created By:</label>
        <input v-model="state.newRecipe.createdBy" type="text" class="form-control border border-dark" id="createdBy" placeholder="Created By...">
      </div>
      <div class="form-group">
        <label for="CategorySelect" class="font">Category</label>
        <select v-model="state.newRecipe.category" id="CategorySelect" class="form-control border border-dark">
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
        <label for="inputIngredient" class="font">Ingredients</label>
        <textarea v-model="state.newRecipe.ingredients" class="form-control border border-dark" id="inputIngredient" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="inputDirections" class="font">Directions</label>
        <textarea v-model="state.newRecipe.directions" class="form-control border border-dark" id="inputDirections" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary" data-toggle="collapse" data-target="#collapseAdd">
        Submit Recipe
      </button>
    </form>
    
    <form
      class=" collapse  card shadow black-bg p-4 m-3 mb-5 border border-dark"
      id="collapseSearch"
      data-parent="#parent"
      @submit.prevent="search"
    >
     <input class="form-control border border-dark border-radius mb-2" v-model="state.searchTerm" type="search" placeholder="Search Recipe....." aria-label="Search">
      <button type="submit" class="btn btn-primary border border-dark" data-toggle="collapse" data-target="#collapseSearch">
        Search
      </button>
    </form>
    </div>
    <div class="col-11 black-bg shadow card title border border-dark ">
      <p class="mb-0 ">
        <u>-CATEGORIES-</u>
      </p>
    </div>
    <categories

      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<script>
import Categories from '../components/Categories.vue'
import { recipeService } from '../services/RecipeService.js'
import { AppState } from '../AppState'
import { ref, watchEffect, computed, onMounted, reactive } from 'vue'
import { router } from '../router.js'
export default {
  name: 'Home',
  setup() {
    const state = reactive({

      searchTerm: '',

      newRecipe: {
        title: '',
        createdBy: '',
        category: '',
        ingredients: '',
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
        router.push({ name: 'RecipesPage', params: { categoryName: 'all' } })
      },

      async search() {
        try {
          let response = recipeService.search(state.searchTerm)
        } catch (error) {
          console.error('boo', error)
        }
      }

    }
  },
  components: { Categories }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
.font{
  font-family: 'Amatic SC', cursive;
  font-size: 40px;
  font-weight: bolder;
}
.cooper{
  font-family: 'Amatic SC', cursive;
  font-size: 100px;
  font-weight: bolder;
  
}
.font-small{
  font-family: 'Amatic SC', cursive;
  font-size: 30px;
  font-weight: bolder;
}
.font-md{
  font-family: 'Amatic SC', cursive;
  font-size: 30px;
}
.bg-tan{
      background-color: rgb(228, 228, 225);

}
.title-bg{
    background-color: rgba(36, 36, 36, 0.568);
    border-radius: 0%;
    
}
.text-light{
  color: #d8d0c6 !important;
}

.title{
  font-family: 'Amatic SC', cursive;
  font-size: 50px;
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

.black-bg{
 background-color: #d1c5b6 !important;
}

.cuttingboard-bg{
  background-image: url("../assets/img/cutting board.jpg");
  background-position: center;
}

@media only screen and (max-width: 768px) {
.title, h1, .cooper{
  font-family: 'Amatic SC', cursive;
  font-size: 65px;
}
button{

    width: 93%;
}
}
</style>
