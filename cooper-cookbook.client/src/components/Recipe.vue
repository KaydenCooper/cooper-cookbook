
<template>
  <div>
    <div
      type="button"
      class="recipe rounded col-12 m-3 mx-md-0 p-4 card bg-tan border border-dark  shadow text-center"
      data-toggle="modal"
      :data-target="'#recipeModal-' + recipe.id"
    >
      <h5>
        {{ recipe.title }}
      </h5>
    </div>

    <RecipeModal :id="'recipeModal-'+ recipe.id">
      <template #modal-header>
        <ul class="list-unstyled mb-0 card bg-light col-12 shadow px-5">
          <li>
            <h2 class=" pt-2 px-2">
              {{ recipe.title }}
            </h2>
          </li>
          <p class=" mb-2 mx-2">
            Created By: {{ recipe.createdBy }}
          </p>
        </ul>
      </template>
      <template #modal-body>
        <div>
          <div class="card card-body text-dark p-1  shadow ">
            <ul class="list-group">
              <li class="list-group-item p-1">
                <p class="font-weight-bold">
                  <u>INGREDIENTS:</u>
                </p>
                <p class="inputIngredient">
                  {{ recipe.ingredients }}
                </p>
              </li>
              <li class="list-group-item p-1">
                <p class="font-weight-bold">
                  <u>DIRECTIONS:</u>
                </p>
                <p class="inputDirections">
                  {{ recipe.directions }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </RecipeModal>
  </div>
</template>

<script>

export default {
  name: 'Recipe',
  props: ['recipe'],
  setup() {
    return {

    }
  },
  computed: {},
  methods: {},
  components: { }
}
</script>

<style >
.inputIngredient{
  white-space: pre-wrap;
}
.inputDirections{
  white-space: pre-wrap;
}
.card{
    border: none;
}

.card-background{
    background-color: rgba(56, 56, 56, 0.801);
    border-radius: 0%;
}

.shadow{
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.685) !important;
}

</style>
