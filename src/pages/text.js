// text page to display block of text for about, story, mission etc.

import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "../components/static/bgImage"
import TextSection from "../components/static/textSection"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Text" />
    <BackgroundImage img={data.img.childImageSharp.fluid} title="text" style="about-background"/>
    <TextSection />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"titleBgImg.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
