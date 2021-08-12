import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class RecipeService {
  async getAll() {
    try {
      const res = await api.get('/recipes')
      AppState.recipe = res.data
    } catch (err) {
      logger.error('Error Error Error???', err)
    }
  }

  async create(recipe) {
    try {
      const res = await api.post('/recipes', recipe)
      AppState.recipe.push(res.data)
    } catch (err) {
      logger.error('Error Error Error???', err)
    }
  }
}

export const accountService = new RecipeService()
