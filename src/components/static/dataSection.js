import React, { Component } from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

export default class DataSection extends Component{
  constructor(props){
    super(props);
    this.state = {
      thing:props.things.edges,
    }
  }
  render(){
    //if detect data from contentful
    if(this.state.thing.length>0){
      return(
        <div className="container p-3 mx-auto text-center">
          <div className="row">
            {this.state.thing.map(({node})=>{
              return(
                <div key={node.id} className="col-11 text-left">
                  <div className="">
                    <h5>{node.title}</h5>
                    <h5>{node.date}</h5>
                  </div>
                  <Img className="float-left m-3" fixed={node.image.fixed} />
                  <p className="text-muted">
                    {node.description.description}
                  </p>
                </div>
              )
            })}
          </div>
          <Link to="/data">
            <button className="btn text-uppercase btn-warning">Data Section</button>
          </Link>
        </div>
      )
    }else{
      return(
        <div className="container p-3 mx-auto text-center">
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <h1>Use contentful to create some post (blog/item/article)</h1>
              <h2>Make sure the graphql names are exactly the same...go to __graphql to check</h2>
            </div>
          </div>
          <Link to="/data">
            <button className="btn text-uppercase btn-warning">Data Section</button>
          </Link>
        </div>
      )
    }
  }
}
