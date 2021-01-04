const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/src/pages/index.js"))),
  "component---src-pages-links-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/src/pages/links.js"))),
  "component---src-pages-products-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/src/pages/products.js")))
}

