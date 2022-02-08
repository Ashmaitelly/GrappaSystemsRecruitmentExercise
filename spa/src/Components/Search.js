import React,{Component} from 'react';
import {Table} from 'react-bootstrap';


export class Search extends Component{

    /* backend 

    constructor(props){
        super(props);
        this.state={movs:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'movies?filter=abc')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    */
    render(){
        /*const {movs}=this.state;*/
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                </Table>
                <h3>This is Search</h3>
            </div>
        )
    }
}