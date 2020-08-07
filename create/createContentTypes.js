const { resolve } = require(`path`)

module.exports = async ({ actions, graphql }, options) => {
  const { templates } = options

  const {
    data: { allWpContentType },
  } = await graphql(`
    query ALL_CONTENT_TYPES {
      allWpContentType {
        nodes {
          singularName
          pluralName
          nodesTypeName
        }
      }
    }
  `)

  const contentTypeTemplates = templates.filter((path) =>
    path.includes(`./src/templates/types/`)
  )

  for (const contentType of allWpContentType.nodes) {
    const { nodesTypeName, singularName } = contentType

    // this is a super super basic template hierarchy
    // this doesn't reflect what our hierarchy will look like.
    // this is for testing/demo purposes
    const contentTypeTemplate = contentTypeTemplates.find(
      (path) => path === `./src/templates/types/${singularName}.js`
    )

    if (!contentTypeTemplate) {
      continue
    }

    const gatsbyNodeListFieldName = `allWp${nodesTypeName}`

    const { data } = await graphql(`
          query ALL_CONTENT_NODES {
            ${gatsbyNodeListFieldName} {
              nodes {
                uri
                id
                date
                ${singularName === "page" ? "isFrontPage" : ""}
              }
            }
          }
        `)

    const { nodes } = data[gatsbyNodeListFieldName]

    await Promise.all(
      nodes.map(async (node, i) => {
        // @todo: determine why pages using allWpContentNode queries
        // don't get automatically updated with incremental data fetching

        await actions.createPage({
          component: resolve(contentTypeTemplate),
          path: node.isFrontPage ? "/" : node.uri,
          context: {
            id: node.id,
            nextPage: (nodes[i + 1] || {}).id,
            previousPage: (nodes[i - 1] || {}).id,
          },
        })
      })
    )
  }
}
