const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
    
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allMarkdownRemark 
            (sort: { order: DESC, fields: [frontmatter___date] })
            {
                edges {
                    node {
                        fields {
                            slug 
                        } 
                        frontmatter {
                            posttype
                        }
                    } 
                } 
            } 
        } 
    `)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.posttype === "seminar") {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/seminar-post.js`),
                context: {
                    slug: node.fields.slug, 
                }, 
            });
        } 
        else if (node.frontmatter.posttype === "teaching") {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/teaching-post.js`),
                context: {
                    slug: node.fields.slug, 
                }, 
            });
        }
        else if (node.frontmatter.posttype === "research") {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/research-post.js`),
                context: {
                    slug: node.fields.slug, 
                }, 
            });
        }
        else{
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/notes-post.js`),
                context: {
                    slug: node.fields.slug, 
                }, 
            });
        }
    })
}

