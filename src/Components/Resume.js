import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) { 
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em> &bull; <a href={education.certificatedownload} download> Diploma </a></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) { 
        const p = work.description.split("-");  
        const recomendation= work.recomendation?<span> &bull; <a href={work.recomendation} download> Carta Recomendação </a></span>:""
        return <div key={work.company}>
          <a href={work.url} className="linkCompany"><h3>{work.company}</h3></a>  
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em> {recomendation}</p>
          <p>{p.map(description =>description.length>0?(<span>*{description}<br /></span>):"")}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    } 

    return (
      <div>
        <section class="resume" id="work">
          <div className="row work">

            <div className="three columns header-col">
              <h1><span>Experiência</span></h1>
            </div>

            <div className="nine columns main-col">
              {work}
            </div>
          </div>
        </section>
        <section class="resume" id="education">
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Educação</span></h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {education}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="resume" id="tech">
          <div className="row skill">

            <div className="three columns header-col">
              <h1><span>Tecnologias</span></h1>
            </div>

            <div className="nine columns main-col">

              <p>{skillmessage}
              </p>

              <div className="bars">
                <ul className="skills">
                  {skills}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Resume;
