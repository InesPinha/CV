import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city; 
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>Sobre mim:</h2>
            <p>Para além da minha experiência profissional, considero-me uma pessoa responsável, altamente motivada, muito organizada, que gosta de novos desafios e com muita vontade de progredir. 
               <br />Tenho satisfação em promover um ambiente de colaboração onde toda a equipa se sinta bem. 
               <br />Acredito que a verdade e honestidade deve estar sempre presente ao interagir com membros da equipa, entidade patronal e parceiros de negócio. </p>
            <p>Participo num serviço voluntário que realizo e valorizo tendo conseguido conciliá-lo com a minha carreira profissional por aceitar empregos a tempo parcial (30h semanais).</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Os meus contactos:</h2>
                  <p className="address">  
						   <span>{phone}</span><br />
                     <span>{email}</span><br />
                     <span>{street} ({zip}, {city}) </span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" download><i className="fa fa-download"></i>Download CV</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
