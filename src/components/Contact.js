import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent, Button } from "react-mdl";

class Contact extends Component {
    render() {
        return (


            <div className="contact-list">
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <h2>Contact Me</h2>
                        <hr />
                        <List>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                    <Button href="https://github.com/lmmccullum" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /></Button>
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                    <Button href="https://www.linkedin.com/in/latisha-mccullum-b599621b8/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true" /></Button>
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                    <Button href="https://join.skype.com/invite/zdeDxuMoGqPQ" target="_blank"><i className="fa fa-skype" aria-hidden="true" /></Button>
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </Cell>
                </Grid>
            </div >
        )
    }
}

export default Contact;
