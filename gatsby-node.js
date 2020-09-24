/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path');

// PAGES
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      language: page.context.language,
    },
  });
};

// POST PAGES
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const { data } = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.allContentfulPost.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: slug,
      component: path.resolve(`src/templates/Post.tsx`),
      context: {
        slug,
      },
    });
  });
};
