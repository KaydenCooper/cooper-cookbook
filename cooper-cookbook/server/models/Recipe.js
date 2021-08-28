import mongoose from 'mongoose'
const Schema = mongoose.Schema

const IngredientSchema = new Schema({
  _id: { type: String },
  ingredient: { type: String, required: false }
},
{ timestamps: true, toJSON: { virtuals: true } })

const CommentSchema = new Schema({
  _id: { type: String },
  creatorId: { type: String, ref: 'Account', required: true },
  comment: { type: String, required: true }
},
{ timestamps: true, toJSON: { virtuals: true } })

export const RecipeSchema = new Schema(
  {

    title: { type: String, required: true },
    creatorId: { type: String, ref: 'Account', required: false },
    createdBy: { type: String, required: true },
    ingredients: [{ type: IngredientSchema }],
    directions: { type: String, required: false },
    category: { type: String, required: true },
    comments: [{ type: CommentSchema }]

  },
  { timestamps: true, toJSON: { virtuals: true } }
)
