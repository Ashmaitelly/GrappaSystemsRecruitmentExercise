import React,{Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {Button} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import './Movie.css';

export class Movie extends Component{
    render(){
        return(
            <div>
                <br></br>
            <center><h3>The Social Network</h3></center>
            {/* Movie Part */}
            <div id='main'>
            <Container>
                <Row>
                <Col sm={3}>
                <img src={process.env.PUBLIC_URL + "/images/movie1.jpg"} alt="The social network" class="img-thumbnail"/>
                </Col>
                <Col sm={3}>
                <h3>Plot:</h3>
                <p>In 2003, Harvard undergrad and computer genius Mark Zuckerberg begins work on a new concept that eventually turns into the global social network known as Facebook. Six years later, he is one of the youngest billionaires ever, but Zuckerberg finds that his unprecedented success leads to both personal and legal complications when he ends up on the receiving end of two lawsuits, one involving his former friend. Based on the book "The Accidental Billionaires."</p>
                <Button className="mr-2" variant="info">
                 Watch Trailer
                </Button>
                </Col>
                </Row>
            </Container> 
            
            </div>
            {/* Cast Part */}
            <div id='cast'>
            <center><h4>Cast</h4></center>
            <Container>
                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/je.jpg"} alt="Jesse Eisenberg" class="img-thumbnail mcicon" />
                </Col>
                <Col sm={2}>
                <NavLink to="/cast">
                <h4>Jesse Eisenberg</h4>
                </NavLink>
                </Col>
                </Row>
                <br></br>
                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/ag.jpg"} alt="Andrew Garfield" class="img-thumbnail mcicon" />
                </Col>
                <Col sm={2}>
                <h4>Andrew Garfield</h4>
                </Col>
                </Row>
            </Container>
            </div>
            </div>
        )
    }
}