import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="Landing-grid">
          <Cell col={12}>
              <img 
              src="https://i.imgur.com/doqAVGS.png" alt="profile pic of Latisha McCullum"
              className="profile-img"
              />
                <div className="banner-text">
                  <h1>Full Stack Web Developer</h1>

                <hr/>   

                <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/latisha-mccullum-b599621b8/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a href="https://github.com/lmmccullum" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                </div>
                </div>
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
