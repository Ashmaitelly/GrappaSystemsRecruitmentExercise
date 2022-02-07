import React,{Component} from 'react';
import {Table} from 'react-bootstrap';


export class Search extends Component{

    constructor(props){
        super(props);
        this.state={movs:{}}
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

    render(){
        const {movs}=this.state;
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>DepartmentId</th>
                        <th>DepartmentName</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movs.map(mov=>
                            <tr key={mov.ID}>
                                <td>{mov.Title}</td>
                                <td>{mov.Plot}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}