
<template>
  <div>
    <div
      type="button"
      class="recipe rounded col-md-4 col-12 m-3 p-4 card bg-dark shadow text-center"
      data-toggle="modal"
      :data-target="'#recipeModal-' + recipe.id"
    >
      <h5>
        {{ recipe.title }}
      </h5>
    </div>

    <RecipeModal :id="'recipeModal-'+ recipe.id">
      <template #modal-body>
        <div>
          <div class="card card-body text-dark p-1">
            <h5 class="mb-3">
              {{ recipe.title }}
            </h5>
            <ul class="list-group">
              <li class="list-group-item p-1">
                <h5><u>INGREDIENTS:</u></h5>
                <p>{{ recipe.ingredients }}</p>
              </li>
              <li class="list-group-item p-1">
                <h5><u>DIRECTIONS:</u></h5>
                <p>{{ recipe.directions }}</p>
              </li>
              <li class="list-group-item p-1">
                <p class="mb-0 font-weight-bold">
                  <u>CREATED BY:</u>
                </p>
                <p class="mb-0">
                  {{ recipe.createdBy }}
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
