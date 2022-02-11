import React,{Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {NavLink} from "react-router-dom";
import './Home.css';



export class Home extends Component{

    render(){
        return(
            <div>
                <center><h2>Featured movies</h2></center>
                <Container>
                <Row>
                <Col sm={3}>
                <NavLink to={{
                pathname:"/movie",
                aboutProps: '1'
                }}>
                <img src={process.env.PUBLIC_URL + "/images/movie1.jpg"} alt="The Social Network" class="img-thumbnail" class="hicon"/>
                </NavLink>
                </Col>
                <Col sm={3}>
                <NavLink to={{
                pathname:"/movie",
                aboutProps: '2'
                }}>   
                <img src={process.env.PUBLIC_URL + "/images/movie2.jpg"} alt="Army of Darkness" class="img-thumbnail" class="hicon"/>
                </NavLink> 
                </Col>
                <Col sm={3}>
                <NavLink to={{
                pathname:"/movie",
                aboutProps: '3'
                }}> 
                <img src={process.env.PUBLIC_URL + "/images/movie3.jpg"} alt="Die Hard" class="img-thumbnail" class="hicon"/>
                </NavLink>
                </Col>
                <Col sm={3}>
                <NavLink to={{
                pathname:"/movie",
                aboutProps: '4'
                }}> 
                <img src={process.env.PUBLIC_URL + "/images/movie4.jpg"} alt="Spider-man 2" class="img-thumbnail" class="hicon"/>
                </NavLink>
                </Col>
                </Row>
                </Container> 
            </div>
            
        )
    }
}