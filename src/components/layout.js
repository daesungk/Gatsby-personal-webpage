import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const ListLink = props => ( 
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link> 
    </li>
)

export default function Layout({ children }) {
    const data = useStaticQuery( 
        graphql` 
            query { 
                site { 
                    siteMetadata { 
                        title 
                    } 
                } 
            } 
        `
    )
    return (
        <div 
            css={css` 
                margin: 0 auto; 
                max-width: 960px; 
                padding: ${rhythm(2)}; 
                padding-top: ${rhythm(1.5)}; 
                `} 
        >
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}> 
                    <h3
                        css={css` 
                            margin-bottom: ${rhythm(2)}; 
                            display: inline; 
                            font-style: normal; 
                        `}
                    >
                        {data.site.siteMetadata.title}
                    </h3> 
                </Link> 
                <ul style={{ listStyle: `none`, float: `right` }}> 
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/research/">Research</ListLink>
                    <ListLink to="/teaching/">Teaching</ListLink> 
                    <ListLink to="/seminar/">Seminar</ListLink> 
                </ul>
            {children} 
        <span
            css={css`
                position: fixed;
                bottom: 10px ;
                margin-left: auto;
                margin-right: auto;
                font-size: 12px;
                `}
        >
            &copy;  2020 Daesung Kim
        </span>
        </div>
    )
}

