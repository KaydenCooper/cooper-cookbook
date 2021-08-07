<template>
  <div class="home row justify-content-center px-0">
    <categories
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
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
