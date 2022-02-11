import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class NavMenu extends Component{
    constructor(props) {
        super(props);
        this.state = {
          inputValue: ''
        };
      }
    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                    Home
                </NavLink>
                <input
                type="text"
                id="searchbar"
                placeholder="Search Movies"
                value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} 
                />
                <NavLink className="d-inline p-2 bg-dark text-white" to={{
                pathname:"/search",
                aboutProps: this.state.inputValue
                }}
                >
                    Search
                </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    updateInputValue(evt) {
        const val = evt.target.value;
        // ...
        this.setState({
          inputValue: val
        });
      }
}