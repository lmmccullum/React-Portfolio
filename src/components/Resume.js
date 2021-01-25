import React, { Component } from 'react';
import { Grid, Cell, Button } from "react-mdl";

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://i.imgur.com/doqAVGS.png"
                                alt="profile pic of Latisha McCullum"
                                style={{ height: "200px" }}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Latisha McCullum</h2>
                        <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                            <p> PLEASE CLICK FOR FULL RESUME </p>
                            <Button colored href="/assets/Myresume.pdf" target="_blank"><i className="fa fa-file" aria-hidden="true" /></Button>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                            <h5>Address</h5>
                            <p>Bourbonnais, IL</p>
                            <h5>Phone</h5>
                            <p>(815) 614-9632</p>
                            <h5>Email</h5>
                            <p>m.latisha@yahoo.com</p>
                            <h5>GitHub</h5>
                            <p>github.com/lmmccullum</p>
                            <h5>LinkedIn</h5>
                            <p>linkedin.com/in/latisha-mccullum-b599621b8</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                    {/* <Button colored href="/assets/Myresume.pdf" target="_blank"><i className="fa fa-file" aria-hidden="true" /></Button> */}
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;