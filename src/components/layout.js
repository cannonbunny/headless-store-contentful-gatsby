/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Nav from "./static/navbar"
import Footer from "./static/footer"
import 'bootstrap/dist/css/bootstrap.css';
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

  const Layout = ({ children }) =>
    <>
    <Nav />
    {children}
    <Footer />
    </>
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

export default Layout
