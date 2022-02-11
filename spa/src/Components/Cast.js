import React,{Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';


export class Cast extends Component{
    constructor(props){
        super(props);
        this.state={casts:[]}
        this.seach=props.location.aboutProps

    }
    componentDidMount(){
        this.setState({casts:this.seach});
    }

    render(){
        const {casts}=this.state;
        return(
            <div>
            
            {/* Main Part */}
            <div id='main'>
            {casts.map(cast=>
            <Container>
            <center><h3>{cast}</h3></center>
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
            )}
            </div>
            </div>
        )
    }
}