import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "katex/dist/katex.min.css"


export default function TeachingPost({data}) {
    const post = data.markdownRemark
    return (
    <Layout>
        <h2>
            <small>{post.frontmatter.semester}</small><br/>
            {post.frontmatter.coursenumber}: {post.frontmatter.coursename}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter { 
                coursename
                coursenumber
                university
                semester
                date
                posttype
            } 
        } 
    } 
`
