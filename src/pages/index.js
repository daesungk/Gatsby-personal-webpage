import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"

export default function Home() {
    return (
        <Layout>
        <Section title="About Me">
            <p>
				I'm a J. L. Doob research assistant professor (postdoc) in the <a href="https://math.illinois.edu/" target="_blank" rel="noreferrer">Dept. of Mathematics</a> at the <a href="https://illinois.edu/" target="_blank" rel="noreferrer">University of Illinois at Urbana-Champaign</a>. 
                I obtained my Ph.D degree in Mathematics at <a href="https://www.purdue.edu/" target="_blank" rel="noreferrer">Purdue University</a> in August 2019 under the supervision of <a href="https://www.math.purdue.edu/people/bio?user=banuelos&amp;page=" target="_blank" rel="noreferrer">Rodrigo Bañuelos</a>.  
                My Curriculum Vitae can be found <a href="http://daesungk.github.io/resources/cv-daesungk.pdf" target="_blank" rel="noreferrer">here</a>.
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
