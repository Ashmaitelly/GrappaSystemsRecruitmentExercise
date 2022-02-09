import React,{Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';


export class Cast extends Component{
    render(){
        return(
            <div>
            <center><h3>Jesse Eisenberg</h3></center>
            {/* Movie Part */}
            <div id='main'>
            <Container>
                <Row>
                <Col sm={3}>
                <img src={process.env.PUBLIC_URL + "/images/je.jpg"} alt="Jesse Eisenberg" class="img-thumbnail"/>
                </Col>
                <Col sm={3}>
                <h3>Bio:</h3>
                <p>Jesse Adam Eisenberg is an American actor and playwright. He made his television debut with the short-lived comedy-drama series Get Real.</p>
                </Col>
                </Row>
                </Container> 
            
            </div>
            </div>
        )
    }
}