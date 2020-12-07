import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import { Link, graphql } from "gatsby"

export default function Seminar({ data }) {
    return (
        <Layout>
        <Section title= "UIUC Probability Seminar Fall 2020">
        <p>
            Tuesday at 2 pm in Zoom. Please email me (daesungk (at) illinois.edu) for information.
        </p>
        <table>
            <thead>
                <tr>
                    <th> Date </th>
                    <th> Speaker </th>
                    <th> Title </th>
                </tr>
            </thead>
            <tbody>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                <tr>
                    <td> {node.frontmatter.date} </td>
                    <td> {node.frontmatter.speaker} ({node.frontmatter.affiliation}) </td>
                    <td> 
                        {node.frontmatter.title} 
                        <br/>
                        <small>
                            {node.excerpt}
                            <Link
                                to={node.fields.slug}
                            >
                            [more]
                            </Link>
                        </small>
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
    allMarkdownRemark(filter: {frontmatter: {seminar: {eq: "UIUC Probability Seminar Fall 2020" }}}, sort: {fields: frontmatter___date, order: DESC}) {
            edges { 
                node { 
                    frontmatter { 
                        affiliation 
                        date 
                        speaker 
                        title 
                        seminar
                        posttype
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
