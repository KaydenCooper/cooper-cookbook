import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class RecipesService {
  async deleteComment(id, commentId) {
    return await dbContext.Recipes.findByIdAndUpdate(
      { _id: id, 'comment._id': commentId },
      { new: true }
    )
  }

  async addComment(id, body) {
    return await dbContext.Recipes.findByIdAndUpdate(
      { _id: id },
      { comments: body },
      { new: true }
    )
  }

  async delete(id) {
    return await dbContext.Recipes.findByIdAndDelete(id)
  }

  async edit(id) {
    return await dbContext.Recipes.findByIdAndUpdate(id)
  }

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

  async create(body) {
    return await dbContext.Recipes.create(body)
  }
}

export const recipesService = new RecipesService()
