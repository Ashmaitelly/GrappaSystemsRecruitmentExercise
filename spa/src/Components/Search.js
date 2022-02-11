import React,{Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {NavLink} from "react-router-dom";
import './Movie.css';
export class Search extends Component{
    
    constructor(props){
        super(props);
        this.state={movs:[]}
        this.seach= props.location.aboutProps
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'movies?filter='+this.seach)
        .then(response=>response.json())
        .then(data=>{
            this.setState({movs:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

      render(){
        const {movs}=this.state;
        return(
            <div>
                <center><h3>Showing results for: {this.seach}</h3></center>
                <Container>
                {movs.map(mov=>
                            <Row>
                            <Col sm={2}>
                            <img src={process.env.PUBLIC_URL + "/images/"+mov.ThumbnailURL} alt="The Social Network" class="img-thumbnail mcicon" />
                            </Col>
                            <Col sm={3}>
                            <NavLink to="/movie">
                            <h4>{mov.Title}</h4>
                            </NavLink>
                            </Col>
                            </Row>
                            )}
            </Container>
            </div>
        )
    }
}