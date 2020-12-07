import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import { Link, graphql } from "gatsby"

export default function Teaching({ data }) {
    return (
        <Layout>
        <Section title="Teaching">
        <table>
            <tbody>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                <tr>
                    <td> {node.frontmatter.semester} </td>
                    <td> 
                    <Link
                        to={node.fields.slug}
                    >
                    {node.frontmatter.coursenumber}: {node.frontmatter.coursename} 
                    </Link>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </Section>
        </Layout>
    ) 
};

export const query = graphql`
    query { 
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {university: {eq: "UIUC"}}}){
            edges { 
                node { 
                    frontmatter { 
                        coursename
                        coursenumber
                        university
                        semester
                        date
                    } 
                    fields {
                        slug
                    }
                    excerpt 
                } 
            }
        } 
    }
`
