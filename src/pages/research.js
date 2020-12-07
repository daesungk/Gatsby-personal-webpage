import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import {TalksList} from "../utils/talkslist.js"
import {PubList} from "../utils/publist.js"


export default function Research() {
    return (
        <Layout>
        <Section title="Research Interest">
            <p>
                My research interests lie at the interface of probability and analysis. I am particularly interested in the study of functional and geometric inequalities, stochastic representation of singular integrals and Fourier multipliers, extremal problems for nonlocal operators, and Stein's method.
            </p>
        </Section>
        <Section title="Publications and Preprints">
            <PubList/>
        </Section>
        <Section title="Talks">
            <TalksList/>
        </Section>
        </Layout>
    ) 
};


