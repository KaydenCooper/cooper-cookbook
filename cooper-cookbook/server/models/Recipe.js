import mongoose from 'mongoose'
const Schema = mongoose.Schema

const IngredientSchema = new Schema({
  ingredient: { type: String, required: true }
},
{ timestamps: true, toJSON: { virtuals: true } })

export const RecipeSchema = new Schema(
  {

    title: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    ingredients: [{ type: IngredientSchema }],
    directions: { type: String, required: false },
    category: { type: String, required: true }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)
