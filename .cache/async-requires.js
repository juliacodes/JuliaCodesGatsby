// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-links-js": () => import("./../../../src/pages/links.js" /* webpackChunkName: "component---src-pages-links-js" */),
  "component---src-pages-products-js": () => import("./../../../src/pages/products.js" /* webpackChunkName: "component---src-pages-products-js" */)
}

