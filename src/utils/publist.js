import React from "react"
import { StaticQuery, graphql } from "gatsby"

function PublistFunction(data) {
    const ItemArray = [];
    data.allPublicationsJson.edges.forEach(item =>
        ItemArray.push(
            <li>
                {item.node.title}, &nbsp;
                <b>{item.node.jrnl}</b>, &nbsp;
                {item.node.jrnlinfo}. &nbsp;
                <a href= {item.node.arxiv} >[arXiv]</a>
            </li>
        )
    );
    return ItemArray;
}

export const PubList = ({ children }) => (
    <StaticQuery
    query={graphql`
        query PubListQuery {
            allPublicationsJson { 
                edges { 
                    node { 
                        title
                        jrnl
                        jrnlinfo
                        arxiv
                    } 
                } 
            } 
        }
    `}
    render={data => (
        <ol>
        {PublistFunction(data)}
        </ol>
    )}
    />
)

