// main page to display both data and text

import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "../components/static/bgImage"
import TextSection from "../components/static/textSection"
import DataSection from "../components/static/dataSection"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImage img={data.img.childImageSharp.fluid} title="Welcome" style="default-background"/>
    <TextSection />
    <DataSection things={data.post}/>
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
  post:allContentfulItem{
    edges{
      node{
        id
        title
        description{
          description
        }
        date
        slug
        image{
          fixed(width:200, height:200){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
