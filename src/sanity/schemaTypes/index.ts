import { type SchemaTypeDefinition } from 'sanity'
import category from './category'
import chef from './chef'
import menuItem from './menuItem'
import food from './food'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, chef, food, menuItem],
}
