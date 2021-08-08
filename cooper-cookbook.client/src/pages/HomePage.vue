<template>
  <div class="home row justify-content-center px-0 mx-0 table-bg">
    <div class="col-12 title  bg-image shadow px-0">
      <h1 class=" mb-0 my-md-5 py-md-5 text-light title-bg">
        Cooper Family Cookbook <br>
        - Est. 1942 -
      </h1>
    </div>
    <div class="col-12 mt-md-4 mt-2 ">
      <button class="btn btn-dark btn-lg m-3 p-4 shadow">
        + Add Recipe
      </button>
      <button class="btn btn-dark btn-lg m-3 p-4 shadow"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
      >
        Categories
      </button>
      <button class="btn btn-dark btn-lg m-3 p-4 shadow">
        All Recipes
      </button>
    </div>
    <div class="col-12 title collapse" id="collapseExample">
      <p class="mb-0">
        <u>CATEGORIES</u>
      </p>
    </div>
    <categories
      class="collapse"
      id="collapseExample"
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<script>
import Categories from '../components/Categories.vue'
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  name: 'Home',
  setup() {
    return {
      categories: computed(() => AppState.categories)
    }
  },
  components: { Categories }
}
</script>

<style scoped lang="scss">
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
