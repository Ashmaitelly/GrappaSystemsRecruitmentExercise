import React,{Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';


export class Movie extends Component{
    render(){
        return(
            <div>
            <center><h3>The Social Network</h3></center>
            {/* Movie Part */}
            <div id='main'>
            <Container>
                <Row>
                <Col sm={3}>
                <img src={process.env.PUBLIC_URL + "/images/movie1.jpg"} alt="The social network" class="img-thumbnail" class="hicon"/>
                </Col>
                <Col sm={3}>
                <h3>Plot:</h3>
                <p>In 2003, Harvard undergrad and computer genius Mark Zuckerberg begins work on a new concept that eventually turns into the global social network known as Facebook. Six years later, he is one of the youngest billionaires ever, but Zuckerberg finds that his unprecedented success leads to both personal and legal complications when he ends up on the receiving end of two lawsuits, one involving his former friend. Based on the book "The Accidental Billionaires."</p>
                </Col>
                </Row>
                </Container> 
            
            </div>
            {/* Cast Part */}
            <div id='cast'></div>
            </div>
        )
    }
}