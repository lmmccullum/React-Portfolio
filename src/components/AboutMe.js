import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";

class About extends Component {
    render() {
        return (

            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={12}>
                        <h2>Latisha McCullum</h2>
                        <img
                            src="https://i.imgur.com/doqAVGS.png"
                            alt="profile pic of Latisha McCullum"
                            style={{ height: "280px" }}
                        />
                        <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                            My name is Latisha McCullum. I was born, raised, and currently
                            live in a small town in the suburbs of Chicago, Illinois. I am a
                            wife, mother of three, grandmother of two, and a HUGE Tom Brady
                            fan. I currently work in the pharmaceutical industry. I recently
                            came to a personal conclusion that this position may not be a
                            passion of mine and decided it was time for change, so here I am-a
                            Full Stack Web Developer! I am a recent graduate of UNCC-Charlotte
                            Full-Time Coding Bootcamp, which was very challenging, but once I
                            get going with something there is no stopping me! I’ve always had
                            a hidden passion for improving websites. I believe that I have
                            many strengths that will assist me in becoming very successful. I
                            am who you’re searching for.{" "}
                        </p>
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default About;