import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"

export default function Home() {
    return (
        <Layout>
        <Section title="About Me">
            <p>
                I'm a J. L. Doob research assistant professor (postdoc) in the Dept. of Mathematics at the University of Illinois at Urbana-Champaign. I obtained my Ph.D degree in Mathematics at Purdue University in August 2019 under the supervision of Rodrigo Banuelos. My Curriculum Vitae can be found here.
            </p>
        </Section>
        <Section title="Contact Information">
            <p>
                Email: <br/> 
                Office: 
            </p>
        </Section>
        </Layout>
    ) 
}
