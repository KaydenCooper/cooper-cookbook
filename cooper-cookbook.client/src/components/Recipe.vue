
<template>
  <div>
    <div
      type="button"
      class="recipe rounded col-12 my-4 mr-md-5 p-4  card table-bg border border-dark  shadow text-center"
      data-toggle="modal"
      :data-target="'#recipeModal-' + recipe.id"
    >
      <h5 class="font">
        {{ recipe.title }}
      </h5>
    </div>

    <RecipeModal :id="'recipeModal-'+ recipe.id">
      <template #modal-header>
        <ul class="list-unstyled mb-0 card table-bg col-12 shadow px-5 font-small">
          <li>
            <h1 class=" pt-2 px-2">
              {{ recipe.title }}
            </h1>
          </li>
          <p class=" mb-2 mx-2">
            Created By: {{ recipe.createdBy }}
          </p>
        </ul>
      </template>
      <template #modal-body>
        <div>
          <div class="card card-body table-bg text-dark p-1  shadow">
            <ul class="list-group">
              <li class="list-group-item p-1">
                <p class="font-weight-bold">
                  <u class="font-small">INGREDIENTS:</u>
                </p>
                <p class="inputIngredient">
                  {{ recipe.ingredients }}
                </p>
              </li>
              <li class="list-group-item p-1">
                <p class="font-weight-bold">
                  <u class="font-small">DIRECTIONS:</u>
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
