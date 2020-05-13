import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
                        I am a passionate technologist focused on helping teams optimize and perform while growing human connections to enable positive change. Over the past decade, I shifted from academic studies in machine learning to building teams for, first, my own startup, and then for established and growth-stage corporations. 
                < br /> < br /> 
                Through these experiences, I have honed my expertise in  Agile software team management and people leadership in both co-located and remote-reliant organizations, from teams of 2 to 25+. My goal is to continue to build upon these skills while helping organizations fulfill their vision by contributing as a strong, proven, technology leader.
                < br />< br /> 
                 Oh and occasionally I just go
                for a sail.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
                            <h3 className="mb-0">Engineering, Development Manager</h3>
              <div className="subheading mb-3">Lixar IT</div>
            <p>
            <p>Grew our air delivery team from 15 to 25 people, embedded in a 200+ IT organization with an American airline client.</p>
            <ul>
                <li>Grow the relation between the Lixar team and the airline&rsquo;s, positioning the Lixar team as valuable SMEs across all full-stack application development.
                </li>
                <li>Iteratively improve the Lixar team&rsquo;s software practices to bring them to modern best practices in Agile delivery, as well as newer proven trends in API delivery and front-end technological stacks.
                </li>
                <li>Closed the culture gap between the distributed nature of the team, focusing on remote first thinking, transparent and asynchronous communication.
                </li>
                <li>Shifted the structure of the team to elevate and train &nbsp;Team Leads and Senior developers in people management and 1-1s, scaling and focusing my time, and increasing their connectivity to peers.
                </li>
                <li>
                    Initiated and owned better corporate practices, focusing on reinvesting in team members&rsquo; skills and professional growth.
                </li>
                <li>
                    During business challenges triggered by the COVID-19 Pandemic, initiated and implemented an internal training and certification process that successfully enabled team members to learn new tech stacks and skills that allowed them to join and contribute to other teams in Lixar&rsquo;s organization. The result: no layoffs and all team members actively and effectively contributing to projects across Lixar.
                </li>
                <li>Initiated the concept of people coaching and isolating it from project reporting in a corporate structure that has fluid project team members due to the nature of service work. This has resulted in a return to focusing on individual contributors&rsquo; career and job satisfaction, resulting in less turnover and better delivery of projects.
                </li>
            </ul>
            <p>Lead remote culture initiator during a shift to work from home pre-COVID, and formalized during the COVID-19 crisis.</p>
            <ul>
                <li>
                    Leaning on previous experience managing teams remotely, helping Lixar shift from a two-office, two-timezone (mainly) operation to a fully remote 200-person organization that has been operating fully remote since March 2019.
                </li>
                <li>
                    Initiated and peer-supported other managers to be performing 1-1s in a more frequent and connected manner, aligning the leadership team with remote management best practices.
                </li>
                <li>
                    Part of the team that has initiated numerous remote-first policies around standups, asynchronous communication, and cultural events to keep people connected and productive in the challenging environment that is a pandemic.
                </li>
            </ul>

            </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
            <h3 className="mb-0">Engineering, Agile Coach, DevOps, Manager</h3>
              <div className="subheading mb-3">Manifold</div>
              <p>
                <p>
                Focused on bringing a DevOps culture to fruition, as well as setting an
                agile practice in place.
                </p>
                <ul>
                <li>
                    
                        Foster mechanisms and processes to have a successful
                        remote-friendly workplace, providing asynchronous and synchronous
                        methods for collaborative teamwork.
                    
                </li>
                <li>
                    
                        Facilitated squad organization around product personas, retro
                        activities, planning, and day-to-day organization
                    
                </li>
                <li>
                    
                        Developed the organization of ideas into projects then executable
                        epics and milestones for engineering, focusing on lightweight
                        processes that ensured successful delivery of features while
                        staying true to product vision.
                    
                </li>
                </ul>  
                <p>Coordinated and implemented the vendor integration process and managed
                                vendor support.
                </p>
                <ul>
                <li>
                    Lead integration engineer, working with vendors as they brought
                    their products to Manifold. Bringing 30+ vendors to the market
                    successfully.
                </li>
                <li>
                    Oversaw customer and partner support programs, ensuring all
                    feedback and input led directly to user stories, then to product
                    roadmaps.
                </li>
                <li>
                    Led discovery and customer validation on vendor-focused products,
                    performing over 50+ vendor calls over a three-month window.
                </li>
                </ul>
                <p>
                Oversaw the government grant programs.
                </p>
                <ul>
                <li>
                    Secured funding through IRAP (100k+) and SR&amp;ED (200k+ x 2)
                    claims and projects, as well as managed a successful co-op program
                    funding and hiring.
                </li>
                <li>
                    Led the scoping and planning for a 1M+ IRAP project in the final
                    phases of approval.
                </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2017 - April 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Development Manager</h3>
              <div className="subheading mb-3">Solutions Technology Inc</div>
              <p>
                <ul>
                    <li>
                        Managed the development team, growing it to 12 people, overseeing
                        all tech department projects.
                    </li>
                    <li >
                        Focus on Agile and lean methodologies while moving legacy
                        technologies to the current state of the art.
                    </li>
                    <li >
                        Lead the re-architecting of the web development stack and
                        infrastructure stack.
                    </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2015 - January 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Co-Founder</h3>
              <div className="subheading mb-3">TopLog Inc</div>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits. Dramatically visualize customer directed
                convergence without revolutionary ROI.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary"> March 2013 - January 2016</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Dalhousie University</h3>
              <div className="subheading mb-3">PhD Candidate</div>
              <div>Computer Science - Machine Learning and Network Security</div>
              <p>GPA: 3.23</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary"></span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Dalhousie University</h3>
              <div className="subheading mb-3">Master of Computer Science</div>
              <div>Computer Science - Machine Learning and Network Security</div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2002 - May 2006</span>
            </div>
          </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                <div className="resume-content">
                    <h3 className="mb-0">Dalhousie University</h3>
                    <div className="subheading mb-3">Batchelors in Computer Science</div>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">August 2002 - May 2006</span>
                </div>
            </div>
        </div>

        
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
