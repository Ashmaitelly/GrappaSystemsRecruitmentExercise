import React,{Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {NavLink} from "react-router-dom";
import './Movie.css';
export class Search extends Component{

      render(){
        return(
            <div>
                <center><h3>Search</h3></center>
                <Container>
                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/movie1.jpg"} alt="The Social Network" class="img-thumbnail mcicon" />
                </Col>
                <Col sm={3}>
                <NavLink to="/movie">
                <h4>The Social Network</h4>
                </NavLink>
                </Col>
                </Row>

                <br></br>

                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/movie2.jpg"} alt="Army of Drakness" class="img-thumbnail mcicon" />
                </Col>
                <Col sm={3}>
                <h4>Army of Drakness</h4>
                </Col>
                </Row>
                
                <br></br>
                
                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/movie3.jpg"} alt="Die Hard" class="img-thumbnail mcicon" />
                </Col>
                <Col sm={3}>
                <h4>Die Hard</h4>
                </Col>
                </Row>
                
                <br></br>
                
                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/movie4.jpg"} alt="Spider-man 2" class="img-thumbnail mcicon" />
                </Col>
                <Col sm={3}>
                <h4>Spider-man 2</h4>
                </Col>
                </Row>
            </Container>
            </div>
        )
    }
}