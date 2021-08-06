import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class RecipesService {
  async find(query = {}) {
    const recipes = await dbContext.Recipes.find(query)
    return recipes
  }

  async findById(id) {
    const recipe = await dbContext.Recipes.findById(id)
    if (!recipe) {
      throw new BadRequest('Invalid Id')
    }
    return recipe
  }
}

export const recipesService = new RecipesService()
