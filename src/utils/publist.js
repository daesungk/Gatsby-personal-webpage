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
                {item.node.collaborators} &nbsp;
                <a href= {item.node.link1url}>{item.node.link1name}</a>&nbsp;
                <a href= {item.node.link2url}>{item.node.link2name}</a>&nbsp;
                <a href= {item.node.link3url}>{item.node.link3name}</a>
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
                        link1name
                        link1url
                        link2name
                        link2url
                        link3name
                        link3url
                        date
                        collaborators
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

