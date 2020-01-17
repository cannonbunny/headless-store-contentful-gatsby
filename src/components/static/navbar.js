// header using react bootstrap navbar, note the link on navbar is split into a state

import React, { Component } from 'react'
import { Link } from "gatsby"
import Logo from "../../../public/icons/icon-72x72.png"

export default class Nav extends Component{
  state={
    navbarOpen:false,
    navbarClose:'collapse navbar-collapse',
    links:[{
      id:1,
      path:'/',
      text:'home'
    },{
      id:2,
      path:'/data',
      text:'data section'
    },{
      id:3,
      path:'/text',
      text:'text section'
    }]
  }
  render(){
    return(
      <nav className="navbar navbar-expand-sm navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler navbar-toggler-icon navbar-toggler-right"
          type="button"
          onClick={() => {
            this.state.navbarOpen?
            this.setState({navbarOpen:false, navbarClose:"collapse navbar-collapse"})
            :this.setState({navbarOpen:true, navbarClose:"collapse navbar-collapse show"})
          }}
        />
        <div className={this.state.navbarClose}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return(
                <li key={link.id} className="nav-item mr-sm-3 pr-sm-5">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
