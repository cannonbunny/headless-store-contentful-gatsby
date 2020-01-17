// background image renderer

import React from "react"
import BackgroundImageSection from "gatsby-background-image"

function BgImage({img, style, title, children}){
  return(
    <BackgroundImageSection className = {style} fluid = {img}>
      <h1 className="title text-white text-uppercase font-weight-bold">
        {title}
      </h1>
    </BackgroundImageSection>
  )
}

BackgroundImageSection.defaultProps = {
  title:"default title",
  style: "default-background"
}

export default BgImage
