// footer section

import React from "react"

function Footer(){
  return(
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto m-5 text-center">
            <p>46 below . All Right Reserved . {new Date().getFullYear().toString()}&copy;</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
