import React,{Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {Button} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import './Movie.css';

export class Movie extends Component{
    constructor(props){
        super(props);
        this.state={movs:[],casts:[]}
        this.seach= props.location.aboutProps

    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'movies/'+this.seach+'/')
        .then(response=>response.json())
        .then(data=>{
            this.setState({movs:data});
        });
        fetch(process.env.REACT_APP_API+'movies/'+this.seach+'/cast')
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
        const {movs,casts}=this.state;
        return(
            <div>
            {/* Movie Part */} 
            <div id='main'>
            {movs.map(mov=>
                          <Container>
                          <center><h3>{mov.Title}</h3></center>
                          <br></br> 
                          <Row>
                          <Col sm={3}>
                          <img src={process.env.PUBLIC_URL + "/images/"+mov.ThumbnailURL} alt={mov.Title} class="img-thumbnail"/>
                          </Col>
                          <Col sm={3}>
                          <h3>Plot:</h3>
                          <p>{mov.Plot}</p>
                          <NavLink to={{
                          pathname:"/wm",
                          aboutProps:mov.VideoURL 
                          }}>
                          <Button className="mr-2" variant="info">
                           Watch Trailer
                          </Button>
                          </NavLink>
                          </Col>
                          </Row>
                      </Container>
                            )}
            
            </div>
            {/* Cast Part */}
            <div id='cast'>
            
            <Container>
            <center><h4>Cast</h4></center>
            {casts.map(cast=>
                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/"+cast.ThumbnailURL} alt={cast.FirstName+' '+cast.LastName} class="img-thumbnail mcicon" />
                </Col>
                <Col sm={2}>
                <NavLink to={{
                          pathname:"/cast",
                          aboutProps:''
                          }}>
                <h4>{cast.FirstName+' '+cast.LastName}</h4>
                </NavLink>
                </Col>
                <br></br>
                </Row>
                )}
            </Container>
            </div>
            </div>
        )
    }
}