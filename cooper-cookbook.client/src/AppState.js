import { reactive } from 'vue'
// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: [],
  account: {},
  recipe: [],
  categories: [
    {
      url: url('../src/assets/img/appetizer.jpg'),
      name: 'APPETIZERS'
    },
    {
      url: url('../src/assets/img/bread.jpg'),
      name: 'BREAD'
    },
    {
      url: url('../src/assets/img/muffin.jpg'),
      name: 'MUFFINS'
    },
    {
      url: url('../src/assets/img/pancake.jpg'),
      name: 'PANCAKES'
    },
    {
      url: url('../src/assets/img/rolls.jpg'),
      name: 'ROLLS'
    },
    {
      url: url('../src/assets/img/scones.jpg'),
      name: 'SCONES'
    },
    {
      url: url('../src/assets/img/cake.jpg'),
      name: 'CAKES'
    },
    {
      url: url('../src/assets/img/candy.jpg'),
      name: 'CANDY'
    },
    {
      url: url('../src/assets/img/snacks.jpg'),
      name: 'SNACKS'
    },
    {
      url: url('../src/assets/img/canning.jpg'),
      name: 'CANNING'
    },
    {
      url: url('../src/assets/img/casserole.jpg'),
      name: 'CASSEROLES'
    },
    {
      url: url('../src/assets/img/cookies.jpg'),
      name: 'COOKIES'
    },
    {
      url: url('../src/assets/img/brownies.jpg'),
      name: 'BROWNIES'
    },
    {
      url: url('../src/assets/img/frosting.jpg'),
      name: 'FROSTINGS'
    },
    {
      url: url('../src/assets/img/main.jpg'),
      name: 'MAIN DISHES'
    },
    {
      url: url('../src/assets/img/side.jpg'),
      name: 'SIDE DISHES'
    },

    {
      url: url('../src/assets/img/pie.jpg'),
      name: 'PIES & CRUSTS'
    },
    {
      url: url('../src/assets/img/soup.jpg'),
      name: 'SOUPS & SALADS'
    },
    {
      url: url('../src/assets/img/dips.jpg'),
      name: 'DIPS | SAUCES | DRESSINGS'
    },
    {
      url: url('../src/assets/img/pastries.jpg'),
      name: 'DESSERTS | PASTRIES | PUDDINGS'
    },
    {
      url: url('../src/assets/img/misc.jpg'),
      name: 'MISC'
    }

  ]
})
