// section to render data from contentful via graphql

import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "../components/static/bgImage"
import DataSection from "../components/static/dataSection"

const DataPage = ({data}) => (
  <Layout>
    <SEO title="Data" />
    <BackgroundImage img={data.img.childImageSharp.fluid} title="data" style="about-background"/>
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
  post:allContentfulBlogItem{
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

export default DataPage
