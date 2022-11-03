import { reactive } from 'vue'
// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: [],
  account: {},
  recipe: [],
  categories: [
    {
      url: require('../src/assets/img/appetizer.jpg'),
      name: 'APPETIZERS'
    },
    {
      url: require('../src/assets/img/bread.jpg'),
      name: 'BREAD'
    },
    {
      url: require('../src/assets/img/muffin.jpg'),
      name: 'MUFFINS'
    },
    {
      url: require('../src/assets/img/pancake.jpg'),
      name: 'PANCAKES'
    },
    {
      url: require('../src/assets/img/rolls.jpg'),
      name: 'ROLLS'
    },
    {
      url: require('../src/assets/img/scones.jpg'),
      name: 'SCONES'
    },
    {
      url: require('../src/assets/img/cake.jpg'),
      name: 'CAKES'
    },
    {
      url: require('../src/assets/img/candy.jpg'),
      name: 'CANDY'
    },
    {
      url: require('../src/assets/img/snacks.jpg'),
      name: 'SNACKS'
    },
    {
      url: require('../src/assets/img/canning.jpg'),
      name: 'CANNING'
    },
    {
      url: require('../src/assets/img/casserole.jpg'),
      name: 'CASSEROLES'
    },
    {
      url: require('../src/assets/img/cookies.jpg'),
      name: 'COOKIES'
    },
    {
      url: require('../src/assets/img/brownies.jpg'),
      name: 'BROWNIES'
    },
    {
      url: require('../src/assets/img/frosting.jpg'),
      name: 'FROSTINGS'
    },
    {
      url: require('../src/assets/img/main.jpg'),
      name: 'MAIN DISHES'
    },
    {
      url: require('../src/assets/img/side.jpg'),
      name: 'SIDE DISHES'
    },

    {
      url: require('../src/assets/img/pie.jpg'),
      name: 'PIES & CRUSTS'
    },
    {
      url: require('../src/assets/img/soup.jpg'),
      name: 'SOUPS & SALADS'
    },
    {
      url: require('../src/assets/img/dips.jpg'),
      name: 'DIPS | SAUCES | DRESSINGS'
    },
    {
      url: require('../src/assets/img/pastries.jpg'),
      name: 'DESSERTS | PASTRIES | PUDDINGS'
    },
    {
      url: require('../src/assets/img/misc.jpg'),
      name: 'MISC'
    }

  ]
})
