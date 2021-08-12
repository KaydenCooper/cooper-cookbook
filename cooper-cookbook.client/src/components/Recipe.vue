
<template>
  <div class="recipe rounded col-5 col-md-2 mx-2 my-4 px-0 card shadow">
    <div class=" d-flex justify-content-center">
      <div class=" col-12 p-1 card card-background">
        <h1>{{ recipe.title }}</h1>
        <p>
          Created By: {{ recipe.createdBy }} <br>
          Category: {{ recipe.categories.name }}
        </p>
        <h3><u>Ingredients:</u><br>{{ recipe.ingredients }}</h3>
        <h4><u>Directions:</u><br>{{ recipe.directions }}</h4>
        <h5 class="text-light my-2">
          <u>Comments:</u><br>
          {{ recipe.comments }}
        </h5>
      </div>
    </div>
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
  components: {}
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
