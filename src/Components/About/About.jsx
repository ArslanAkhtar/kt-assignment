import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="doc2" class="yui-t7">
      <div id="inner">
        <div id="hd">
          <div class="yui-gc">
            <div class="yui-u first">
              <h1 className="h1">Muhammad Arslan Akhtar</h1>
              <h2 className="h2">Senior Software Engineer</h2>
            </div>

            <div class="yui-u">
              <div class="contact-info">
                <h3>
                  <a id="pdf" href="#">
                    Download PDF
                  </a>
                </h3>

                <br></br>
                <br></br>
                <br></br>
                <h3 class="email">
                  <a href="mailto:arslanakhtar1012@gmail.com">
                    arslanakhtar1012@gmail.com
                  </a>
                </h3>
                <h3 className="h4">(312) - 233-4401</h3>
              </div>
            </div>
          </div>
        </div>

        <div id="bd">
          <div id="yui-main">
            <div class="yui-b">
              <div class="yui-gf">
                <div class="yui-u first">
                  <h2>Profile</h2>
                </div>
                <div class="yui-u">
                  <p class="enlarge">
                    Arslan is a dedicated, keen and results-driven individual
                    having 5+ years of experience with IT industry. Eager to
                    work in an organization which supports amazing work and
                    client satisfaction
                  </p>
                </div>
              </div>
              <div class="yui-gf">
                <div class="yui-u first">
                  <h2>Projects</h2>
                </div>
                <div class="yui-u">
                  <div class="talent">
                    <h2>Tenant</h2>
                    <p>
                      It a leasing application whose backend is implemented in
                      Node.js and frontend in Vue.js. For database storage mysql
                      is used. Worked on this project as full stack developer ,
                      generated some reports and wrote some complex queries in
                      it as well{" "}
                    </p>
                  </div>

                  <div class="talent">
                    <h2>WRLD3D.COM</h2>
                    <p>
                      A hybrid project of React and ruby on rails using
                      Web-packer. Website consists in five containers of docker.
                      Created services in reactjs. Created dynamic user guides
                      by json and react components. Implemented react based
                      components and called them on ruby on rails pages. Used
                      Redux states for locking features.Developed website using
                      docker containers. Created Database in PostgreSQL{" "}
                    </p>
                  </div>

                  <div class="talent">
                    <h2>Dynamic Cards</h2>
                    <p>
                      These are the responsive html cards used in Netsol smart
                      app. There are multiple smart cards in this app through
                      which you can check employee status and book meeting room
                      etc. Used Rest services and JS libraries like google
                      calendar and graphs to make Smart Responsive cards. Used
                      CSS3 properties to make them responsive. Created Dynamic
                      scroll based pagination library.{" "}
                    </p>
                  </div>
                  <div class="talent">
                    <h2>Blocky Athletics</h2>
                    <p>
                      It was an android and IOS that further was comprised of seven games.All games were 3D which were implemented on Unity editor.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div class="yui-gf">
                <div class="yui-u first">
                  <h2>Skills</h2>
                </div>
                <div class="yui-u">
                  <ul class="talent">
                    <li>ReactJs</li>
                    <li>NodeJs</li>
                    <li>JQuery</li>
                    <li>HTML/HTML5</li>
                    <li>AJAX</li>
                    <li>Redux</li>
                    <li>CSS2/3</li>
                    <li class="last">Javascript</li>
                  </ul>

                  <ul class="talent">
                    <li>Typescript</li>
                    <li>Codeegniter</li>
                    <li>Unity</li>
                    <li>MYSQL</li>
                    <li>PostgreSQL</li>
                    <li>C#</li>
                    <li>JQuery</li>
                    <li class="last">PHP</li>
                  </ul>

                  <ul class="talent">
                    <li>Docker</li>
                    <li>Apache</li>
                    <li>GIT-Versioning</li>
                    <li>Chef-Server</li>
                    <li>AWS</li>
                    <li class="last">Linux</li>
                  </ul>
                </div>
              </div>
              <div class="yui-gf">
                <div class="yui-u first">
                  <h2>Experience</h2>
                </div>

                <div class="yui-u">
                  <div class="job">
                    <h2>Strategic Systems International.</h2>
                    <h3>SENIOR SOFTWARE ENGINEER</h3>
                    <h4>
                      2020-<i>present</i>
                    </h4>
                    <p>Working as a Full Stack Developer</p>
                  </div>

                  <div class="job">
                    <h2>NETSOL TECHNOLOGIES INC.</h2>
                    <h3>SENIOR SOFTWARE ENGINEER</h3>
                    <h4>2018-2020</h4>
                    <p>Worked as Front-End Developer</p>
                  </div>

                  <div class="job last">
                    <h2>NETSOL TECHNOLOGIES INC.</h2>
                    <h3>Software Engineer</h3>
                    <h4>2016-2018</h4>
                    <p>Worked as Game Developer</p>
                  </div>
                </div>
              </div>

              <div class="yui-gf last">
                <div class="yui-u first">
                  <h2>Education</h2>
                </div>
                <div class="yui-u">
                  <h2>
                    Imperial College for Business Studies - Lahore, Pakistan
                  </h2>
                  <h3>
                    Bachelors of Information Technology, 2011-2015&mdash;{" "}
                    <strong>3.67 GPA</strong>{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="ft">
          <p>
            Muhammad Arslan &mdash;{" "}
            <a href="mailto:arslanakhtar1012@gmail.com">arslanakhtar1012@gmail.com</a> &mdash;
            (312) - 233-4401
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
