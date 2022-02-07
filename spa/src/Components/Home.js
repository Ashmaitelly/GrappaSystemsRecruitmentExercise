import React,{Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';



export class Home extends Component{

    render(){
        return(
            <div>
                <center><h2>Select A Movie</h2></center>
                <Container>
                <Row>
                <Col sm={3}>
                <img src={process.env.PUBLIC_URL + "/images/movie1.jpg"} alt="The Social Network" class="img-thumbnail"/>
                </Col>
                <Col sm={3}>
                <img src={process.env.PUBLIC_URL + "/images/movie2.jpg"} alt="Army of Darkness" class="img-thumbnail"/>
                </Col>
                <Col sm={3}>
                <img src={process.env.PUBLIC_URL + "/images/movie3.jpg"} alt="Die Hard" class="img-thumbnail"/>
                </Col>
                <Col sm={3}>
                <img src={process.env.PUBLIC_URL + "/images/movie4.jpg"} alt="Spider-man 2" class="img-thumbnail"/>
                </Col>
                </Row>
                </Container> 
            </div>
            
        )
    }
}