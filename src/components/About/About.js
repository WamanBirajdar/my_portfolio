import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        
          
        
          <div className="AboutBio">
            
            Hello! My name is <strong>Waman Birajdar</strong>. I'm originally from Dharashiv and have been living in Pune for the past 15 years. During my time here, I gained valuable experience through various entry-level positions, which greatly enhanced my work ethic, communication skills, and adaptability.
           

            <br /><br />
            
            
            I am an enthusiastic Data Engineer with a can-do approach to all data-related challenges. I am always learning new things related to data technologies and developments. Creating lots of advanced Python scripts and writing many advanced SQL queries. Creating both batch and streaming data pipelines with many data tools and frameworks.
           

            <br /><br />

           
             
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
           
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
