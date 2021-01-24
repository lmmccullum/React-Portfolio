import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

    if(this.state.activeTab === 0) {
        return(
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}>React Project #1</CardTitle>    
            <CardText>
            Latisha Marie McCullum
            </CardText>
            <CardActions border>
                <button colored>Deployed</button>
                <button colored>GitHub</button>
            </CardActions>
            <CardMenu style={{color: '#eff'}}>
              <iconButton name="share" />  
            </CardMenu>
            </Card>
        )
    } else if(this.state.activeTab === 1) {
        return(
            <div><h1>This Is JavaScript</h1></div>
        )
    } else if(this.state.activeTab === 2) {
        return(
            <div><h1>This Is MongoDB</h1></div>
        )
    } else if(this.state.activeTab === 3) {
        return(
            <div><h1>This Is Express</h1></div>
        )
    } else if(this.state.activeTab === 4) {
        return(
            <div><h1>This Is Heroku</h1></div>
        )
    }

}
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Express</Tab>
                    <Tab>Heroku</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;