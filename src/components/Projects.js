import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (

                // React/ #1   
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://i.imgur.com/cISTyU4.png) center / cover' }}>Employee Directory</CardTitle>
                        <CardText>
                        This is an application that allows a user to be able to view their entire employee directory at once and have quick access to their information.
                        </CardText>
                        <CardActions border>
                        <Button colored={{display: "table-cell"}} href="https://lmmccullum.github.io/Employee-Directory/" target="_blank">Deployed</Button>
                        <Button colored={{display: "table-cell"}} href="https://github.com/lmmccullum/Employee-Directory.git" target="_blank">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                {/* React #2 */}

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover' }}>Collaborative Event Planner</CardTitle>
                        <CardText>
                            DESCRIPTION OF: Collaborative Event Planner! This is my Final Project and is still under construction. Keep an eye out for it as it will posted very soon.
                        </CardText>
                        <CardActions border>
                        <Button colored={{display: "table-cell"}} href="" target="_blank">Deployed</Button>
                        <Button colored={{display: "table-cell"}} href="https://github.com/jmyardley/collaborative-event-planner.git" target="_blank">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
 
        } else if (this.state.activeTab === 1) {
                return (

                    // JavaScript
                    <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://i.imgur.com/cczBF7u.png) center / cover' }}>Work Day Planner</CardTitle>
                        <CardText>
                        This is a simple calendar application that allows a user to manage their time effectively by saving events to the Planner for each hour of the day.
                        </CardText>
                        <CardActions border>
                        <Button colored={{display: "table-cell"}} href="https://lmmccullum.github.io/Work-Day-Planner/" target="_blank">Deployed</Button>
                        <Button colored={{display: "table-cell"}} href="https://github.com/lmmccullum/Work-Day-Planner.git" target="_blank">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </div>
                )
            } else if (this.state.activeTab === 2) {
                return (

                    // MongoDB
                    <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://i.imgur.com/n4clabd.png) bottom / cover' }}>Online/Offline Budget Tracker</CardTitle>
                        <CardText>
                        This is a Budget Tracker application that allows a user to add expenses and deposits to their budget with or without a connection.
                        </CardText>
                        <CardActions border>
                        <Button colored={{display: "table-cell"}} href="https://frozen-crag-31486.herokuapp.com/" target="_blank">Deployed</Button>
                        <Button colored={{display: "table-cell"}} href="https://github.com/lmmccullum/Online-Offline-Budget-Trackers.git" target="_blank">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </div>
                )
            } else if (this.state.activeTab === 3) {
                return (

                    // Express
                    <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://i.imgur.com/qJQbeGF.png) center / cover' }}>Note Taker</CardTitle>
                        <CardText>
                        This is an application that allows a User to be able to write, save, and delete notes written before in order to organize thoughts and keep track of tasks that needs to be complete.
                        </CardText>
                        <CardActions border>
                        <Button colored={{display: "table-cell"}} href="https://cryptic-hamlet-17782.herokuapp.com/" target="_blank">Deployed</Button>
                        <Button colored={{display: "table-cell"}} href="https://github.com/lmmccullum/Note-Taker" target="_blank">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </div>
                )
            } else if (this.state.activeTab === 4) {
                return (

                    // Heroku
                    <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://i.imgur.com/gEVi2Ry.png) center / cover' }}>Stellar Covid Test Scheduler App</CardTitle>
                        <CardText>
                        This application is used to schedule covid tests for anyone who wants to know their status and color codes available and non-available day/time slots.
                        </CardText>
                        <CardActions border>
                        <Button colored={{display: "table-cell"}} href="https://thawing-beach-04875.herokuapp.com/" target="_blank">Deployed</Button>
                        <Button colored={{display: "table-cell"}} href="https://github.com/jmyardley/stellar-app" target="_blank">GitHub</Button>  
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </div>
                )
            }

        }
        render() {
            return (
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab>React</Tab>
                        <Tab>JavaScript</Tab>
                        <Tab>MongoDB</Tab>
                        <Tab>Express</Tab>
                        <Tab>Heroku</Tab>
                    </Tabs>

                        <Grid>
                            <Cell col={12}>
                                <div className="content">{this.toggleCategories()}</div>
                            </Cell>
                        </Grid>
                    
                </div>
            )
        }
    }

    export default Projects;