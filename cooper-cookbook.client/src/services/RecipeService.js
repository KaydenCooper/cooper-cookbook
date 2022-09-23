import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class RecipeService {
  async getbyId(id) {
    try {
      const res = await api.get(`api/recipes/${id}`)
      AppState.recipe = res.data.data
    } catch (err) {
      logger.err('WRONG', err)
    }
  }

  async getAll() {
    try {
      const res = await api.get('api/recipes')
      AppState.recipe = res.data.data
    } catch (err) {
      logger.error('Error Error Error???', err)
    }
  }

  async create(recipe) {
    try {
      const res = await api.post('api/recipes', recipe)
      AppState.recipe.push(res.data)
    } catch (err) {
      logger.error('Error Error Error???', err)
    }
  }
}

export const recipeService = new RecipeService()
