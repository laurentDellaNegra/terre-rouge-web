module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  useTabs: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  semi: false,
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
