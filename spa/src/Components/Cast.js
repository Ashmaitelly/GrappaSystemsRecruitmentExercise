import React,{Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';


export class Cast extends Component{
    constructor(props){
        super(props);
        this.state={casts:[]}
        this.seach=props.location.aboutProps

    }
    refreshList(){
        fetch(process.env.REACT_APP_API+'movies/celeb/'+this.seach)
        .then(response=>response.json())
        .then(data=>{
            this.setState({casts:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {casts}=this.state;
        return(
            <div>
            
            {/* Main Part */}
            <div id='main'>
            {casts.map(cast=>
            <Container>
            <center><h3>{cast.FirstName+' '+cast.LastName}</h3></center>
                <Row>
                <Col sm={3}>
                <img src={process.env.PUBLIC_URL + "/images/"+cast.ThumbnailURL} alt={cast.FirstName+' '+cast.LastName} class="img-thumbnail"/>
                </Col>
                <Col sm={3}>
                <h3>Bio:</h3>
                <p>{cast.Biography}</p>
                </Col>
                </Row>
                </Container> 
            )}
            </div>
            </div>
        )
    }
}