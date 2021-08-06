import mongoose from 'mongoose'
import { RecipeSchema } from '../models/Recipe'
import { AccountSchema } from '../models/Account'

class DbContext {
  Recipes = mongoose.model('Recipe', RecipeSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
