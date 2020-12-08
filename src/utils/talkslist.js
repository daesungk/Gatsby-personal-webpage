import React from "react"
import { StaticQuery, graphql } from "gatsby"

function TalklistFunction(data) {
    const ItemArray = [];
    data.allTalksJson.edges.forEach(item =>
        ItemArray.push(
            <li>
                {item.node.seminar}, &nbsp;
                {item.node.place}, &nbsp;
                {item.node.date}.
            </li>
        )
    );
    return ItemArray;
}

export const TalksList = ({ children }) => (
    <StaticQuery
    query={graphql`
        query TalkListQuery {
            allTalksJson { 
                edges { 
                    node { 
                        seminar 
                        place 
                        date 
                        type
                    } 
                } 
            } 
        }
    `}
    render={data => (
        <ol>
        {TalklistFunction(data)}
        </ol>
    )}
    />
)

