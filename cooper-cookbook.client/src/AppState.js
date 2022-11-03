import { reactive } from 'vue'
import appUrl from '../src/assets/img/appetizer.jpg'
import breadUrl from '../src/assets/img/bread.jpg'
import muffinUrl from '../src/assets/img/muffin.jpg'
import pancakeUrl from '../src/assets/img/pancake.jpg'
import rollsUrl from '../src/assets/img/rolls.jpg'
import sconesUrl from '../src/assets/img/scones.jpg'
import cakeUrl from '../src/assets/img/cake.jpg'
import candyUrl from '../src/assets/img/candy.jpg'
import snacksUrl from '../src/assets/img/snacks.jpg'
import canningUrl from '../src/assets/img/canning.jpg'
import cookiesUrl from '../src/assets/img/cookies.jpg'
import browniesUrl from '../src/assets/img/brownies.jpg'
import frostingUrl from '../src/assets/img/frosting.jpg'
import mainUrl from '../src/assets/img/main.jpg'
import sideUrl from '../src/assets/img/side.jpg'
import pieUrl from '../src/assets/img/pie.jpg'
import soupUrl from '../src/assets/img/soup.jpg'
import dipsUrl from '../src/assets/img/dips.jpg'
import pastriesUrl from '../src/assets/img/pastries.jpg'
import miscUrl from '../src/assets/img/misc.jpg'
import casseroleUrl from '../src/assets/img/casserole.jpg'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: [],
  account: {},
  recipe: [],
  categories: [
    {
      url: appUrl,
      name: 'APPETIZERS'
    },
    {
      url: breadUrl,
      name: 'BREAD'
    },
    {
      url: muffinUrl,
      name: 'MUFFINS'
    },
    {
      url: pancakeUrl,
      name: 'PANCAKES'
    },
    {
      url: rollsUrl,
      name: 'ROLLS'
    },
    {
      url: sconesUrl,
      name: 'SCONES'
    },
    {
      url: cakeUrl,
      name: 'CAKES'
    },
    {
      url: candyUrl,
      name: 'CANDY'
    },
    {
      url: snacksUrl,
      name: 'SNACKS'
    },
    {
      url: canningUrl,
      name: 'CANNING'
    },
    {
      url: casseroleUrl,
      name: 'CASSEROLES'
    },
    {
      url: cookiesUrl,
      name: 'COOKIES'
    },
    {
      url: browniesUrl,
      name: 'BROWNIES'
    },
    {
      url: frostingUrl,
      name: 'FROSTINGS'
    },
    {
      url: mainUrl,
      name: 'MAIN DISHES'
    },
    {
      url: sideUrl,
      name: 'SIDE DISHES'
    },

    {
      url: pieUrl,
      name: 'PIES & CRUSTS'
    },
    {
      url: soupUrl,
      name: 'SOUPS & SALADS'
    },
    {
      url: dipsUrl,
      name: 'DIPS | SAUCES | DRESSINGS'
    },
    {
      url: pastriesUrl,
      name: 'DESSERTS | PASTRIES | PUDDINGS'
    },
    {
      url: miscUrl,
      name: 'MISC'
    }

  ]
})
