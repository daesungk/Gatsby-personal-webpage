import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "katex/dist/katex.min.css"


export default function SeminarPost({data}) {
    const post = data.markdownRemark
    return (
    <Layout>
        <h2>
            {post.frontmatter.title}
        </h2>
        <div>
            <p>
                {post.frontmatter.seminar}<br/>
                {post.frontmatter.speaker} ({post.frontmatter.affiliation}) <br/>
                {post.frontmatter.date}, &nbsp;
                {post.frontmatter.place}
            </p>
        </div>
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
        place
      }
    }
  }
`
