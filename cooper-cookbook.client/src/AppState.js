import { reactive } from 'vue'
// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: [],
  account: {},
  recipe: [],
  categories: [
    {
      url: 'assets/img/appetizer.jpg',
      name: 'APPETIZERS'
    },
    {
      url: 'assets/img/bread.jpg',
      name: 'BREAD'
    },
    {
      url: 'assets/img/muffin.jpg',
      name: 'MUFFINS'
    },
    {
      url: 'assets/img/pancake.jpg',
      name: 'PANCAKES'
    },
    {
      url: 'assets/img/rolls.jpg',
      name: 'ROLLS'
    },
    {
      url: 'assets/img/scones.jpg',
      name: 'SCONES'
    },
    {
      url: 'assets/img/cake.jpg',
      name: 'CAKES'
    },
    {
      url: 'assets/img/candy.jpg',
      name: 'CANDY'
    },
    {
      url: 'assets/img/snacks.jpg',
      name: 'SNACKS'
    },
    {
      url: 'assets/img/canning.jpg',
      name: 'CANNING'
    },
    {
      url: 'assets/img/casserole.jpg',
      name: 'CASSEROLES'
    },
    {
      url: 'assets/img/cookies.jpg',
      name: 'COOKIES'
    },
    {
      url: 'assets/img/brownies.jpg',
      name: 'BROWNIES'
    },
    {
      url: 'assets/img/frosting.jpg',
      name: 'FROSTINGS'
    },
    {
      url: 'assets/img/main.jpg',
      name: 'MAIN DISHES'
    },
    {
      url: 'assets/img/side.jpg',
      name: 'SIDE DISHES'
    },

    {
      url: 'assets/img/pie.jpg',
      name: 'PIES & CRUSTS'
    },
    {
      url: 'assets/img/soup.jpg',
      name: 'SOUPS & SALADS'
    },
    {
      url: 'assets/img/dips.jpg',
      name: 'DIPS | SAUCES | DRESSINGS'
    },
    {
      url: 'assets/img/pastries.jpg',
      name: 'DESSERTS | PASTRIES | PUDDINGS'
    },
    {
      url: 'assets/img/misc.jpg',
      name: 'MISC'
    }

  ]
})
