/*
 * Used to tag template literals with * tw * to enable Tailwind CSS class name intellisense and prettier formatting.
 * Example usage: tw`text-red-500`
 */

// Define a type for the function that represents a tagged template literal function
// eslint-disable-next-line no-unused-vars
type TaggedTemplateLiteralFn = (strings: TemplateStringsArray, ...values: unknown[]) => string

// Implement the `tw` function with the type defined above
const tw: TaggedTemplateLiteralFn = (strings, ...values) => String.raw({ raw: strings }, ...values)

export default tw
