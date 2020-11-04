// const fetch = require(`node-fetch`)

require("dotenv").config()

module.exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
    devtool: false,
  })
}

module.exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  return createPage({
    path: "/",
    component: require.resolve("./src/components/Index/Index.jsx"),
    context: {
      content: {
      },
    },
  })
}