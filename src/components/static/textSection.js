// section to render text for the text page

import React from "react"
import { Link } from "gatsby"

function TextSection(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center mt-5 mb-5">
          <p className="lead text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in egestas erat imperdiet sed euismod. Iaculis urna id volutpat lacus. Velit scelerisque in dictum non consectetur a erat nam. Ipsum faucibus vitae aliquet nec ullamcorper. Integer quis auctor elit sed. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Ac placerat vestibulum lectus mauris ultrices eros. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Risus viverra adipiscing at in tellus integer. Convallis aenean et tortor at risus viverra adipiscing at. Neque vitae tempus quam pellentesque nec nam aliquam sem. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Ultrices vitae auctor eu augue. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Tellus cras adipiscing enim eu turpis egestas. Dignissim enim sit amet venenatis urna cursus eget nunc.
          </p>
          <Link to="/text">
            <button className="btn text-uppercase btn-warning">Text Section</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TextSection
