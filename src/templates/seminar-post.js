import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "katex/dist/katex.min.css"


export default function SeminarPost({data}) {
    const post = data.markdownRemark
    return (
    <Layout>
        <h2>
            <small>{post.frontmatter.seminar}</small><br/>
            {post.frontmatter.title}
        </h2>
        <h4>{post.frontmatter.speaker} ({post.frontmatter.affiliation}) </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        affiliation
        date
        seminar
        speaker
        title
        posttype
      }
    }
  }
`
