import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { recipesService } from '../services/RecipesService'

export class RecipesController extends BaseController {
  constructor() {
    super('api/recipes')
    this.router
      .get('', this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .get('/:id', this.getRecipe)
      .post('', this.create)
      .post('/:id/comments', this.addComment)
      .put('/:id', this.edit)
      // .put('/:id/comments/:commentId', this.editComments)
      .delete('/:id', this.delete)
      .delete('/:id/comments/:commentId', this.deleteComment)
      //.use(Auth0Provider.getAuthorizedUserInfo)
  }

  async deleteComment(req, res, next) {
    try {
      const comment = await recipesService.deleteComment(req.params.id, req.params.commentId)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const recipes = await recipesService.find(req.query)
      return res.send({ data: recipes })
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.account.id
      const data = await recipesService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getRecipe(req, res, next) {
    try {
      const recipe = await recipesService.findById(req.params.id)
      res.send({ data: recipe, message: 'got the recipe' })
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      const recipe = await recipesService.edit(req.params.id, req.body)
      res.send({ data: recipe, message: 'changed' })
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const recipe = await recipesService.delete(req.params.id)
      res.send({ data: recipe, message: 'Deleted' })
    } catch (error) {
      next(error)
    }
  }

  async addComment(req, res, next) {
    try {
      const comment = await recipesService.addComment(req.params.id, req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
}
