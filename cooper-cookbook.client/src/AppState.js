import { reactive } from 'vue'
// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  categories: [
    {
      url: '../src/assets/img/appetizer.jpg',
      name: 'APPETIZERS'
    },
    {
      url: '../src/assets/img/bread.jpg',
      name: 'BREAD'
    },
    {
      url: '../src/assets/img/muffin.jpg',
      name: 'MUFFINS'
    },
    {
      url: '../src/assets/img/pancake.jpg',
      name: 'PANCAKES'
    },
    {
      url: '../src/assets/img/rolls.jpg',
      name: 'ROLLS'
    },
    {
      url: '../src/assets/img/scones.jpg',
      name: 'SCONES'
    },
    {
      url: '../src/assets/img/cake.jpg',
      name: 'CAKES'
    },
    {
      url: '../src/assets/img/candy.jpg',
      name: 'CANDY'
    },
    {
      url: '../src/assets/img/snacks.jpg',
      name: 'SNACKS'
    },
    {
      url: '../src/assets/img/canning.jpg',
      name: 'CANNING'
    },
    {
      url: '../src/assets/img/casserole.jpg',
      name: 'CASSEROLES'
    },
    {
      url: '../src/assets/img/cookies.jpg',
      name: 'COOKIES'
    },
    {
      url: '../src/assets/img/brownies.jpg',
      name: 'BROWNIES'
    },
    {
      url: '../src/assets/img/frosting.jpg',
      name: 'FROSTINGS'
    },
    {
      url: '../src/assets/img/main.jpg',
      name: 'MAIN DISHES'
    },
    {
      url: '../src/assets/img/side.jpg',
      name: 'SIDE DISHES'
    },

    {
      url: '../src/assets/img/pie.jpg',
      name: 'PIES & CRUSTS'
    },
    {
      url: '../src/assets/img/soup.jpg',
      name: 'SOUPS & SALADS'
    },
    {
      url: '../src/assets/img/dips.jpg',
      name: 'DIPS | SAUCES| DRESSINGS'
    },
    {
      url: '../src/assets/img/pastries.jpg',
      name: 'DESSERTS | PASTRIES | PUDDINGS'
    },
    {
      url: '../src/assets/img/misc.jpg',
      name: 'MISC'
    }

  ]
})
