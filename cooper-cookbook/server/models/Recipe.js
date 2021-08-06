import mongoose from 'mongoose'
const Schema = mongoose.Schema

const IngredientSchema = new Schema({
  ingredient: { type: String, required: true }
},
{ timestamps: true, toJSON: { virtuals: true } })

const Recipe = new Schema(
  {

    title: { type: String, required: true },
    directions: { type: String, required: false },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    ingredients: [{ type: IngredientSchema }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
export default Recipe
