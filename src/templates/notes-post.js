import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "katex/dist/katex.min.css"


export default function NotePost({data}) {
    const post = data.markdownRemark
    return (
    <Layout>
        <h2>
            {post.frontmatter.title}
        </h2>
        <h4>Date: {post.frontmatter.date} </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        posttype
      }
    }
  }
`
