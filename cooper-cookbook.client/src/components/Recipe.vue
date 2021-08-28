
<template>
  <div class="recipe rounded col-md-3 col-12 m-3 p-2 card bg-dark shadow text-center">
    <h5>
      {{ recipe.title }}
    </h5>
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
