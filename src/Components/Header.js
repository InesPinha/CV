import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Eu</a></li>
                  <li><a className="smoothscroll" href="#about">Sobre mim</a></li>
                  <li><a className="smoothscroll" href="#work">Expêriencia</a></li>
                  <li><a className="smoothscroll" href="#education">Educação</a></li>
                  <li><a className="smoothscroll" href="#tech">Tecnologias</a></li>
                  {/*<li><a className="smoothscroll" href="#portfolio">Projectos Paralelos</a></li> */}
                  {/*<li><a className="smoothscroll" href="#contact">Contacte-me</a></li> */}
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">{name}</h1>
                  <h3> </h3>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>
         </header>
      );
   }
}

export default Header;
