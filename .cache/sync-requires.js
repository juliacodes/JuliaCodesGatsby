const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/src/pages/404.js"))),
  "component---src-pages-awkward-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/src/pages/Awkward.js"))),
  "component---src-pages-chemistry-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/src/pages/Chemistry.js"))),
  "component---src-pages-coffee-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/src/pages/Coffee.js"))),
  "component---src-pages-decore-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/src/pages/Decore.js"))),
  "component---src-pages-forecast-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/src/pages/Forecast.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/src/pages/index.js")))
}

