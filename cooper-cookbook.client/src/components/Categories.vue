
<template>
  <div class="categories rounded col-5 col-md-2 m-4 px-0 card shadow">
    <div class="embed-responsive embed-responsive-4by3  d-flex justify-content-center align-items-end">
      <img :src="category.url" class="card-img-top embed-responsive-item" alt="image">
      <div class=" col-12 p-1 card card-background">
        <h5 class="text-light my-2">
          {{ category.name }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Categories',
  props: ['category'],
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
