import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"

export default function Home() {
    return (
        <Layout>
        <Section title="About Me">
            <p>
				I'm a J. L. Doob research assistant professor (postdoc) in the <a href="https://math.illinois.edu/">Dept. of Mathematics</a> at the <a href="https://illinois.edu/">University of Illinois at Urbana-Champaign</a>. I obtained my Ph.D degree in Mathematics at <a href="https://www.purdue.edu/">Purdue University</a> in August 2019 under the supervision of <a href="https://www.math.purdue.edu/people/bio?user=banuelos&amp;page=" target="_blank">Rodrigo Bañuelos</a>.  My Curriculum Vitae can be found <a href="cv-daesungk.pdf" target="_blank">here</a>.
            </p>
        </Section>
        <Section title="Contact Information">
            <p>
				Email: <a href="mailto:daesungk@illinois.edu">daesungk (at) illinois.edu</a> <br/> 
                Office: 247B Illini Hall
            </p>
        </Section>
        </Layout>
    ) 
}
