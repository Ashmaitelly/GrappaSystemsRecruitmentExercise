import './App.css';


import {NavMenu} from './Components/NavMenu';
import {Home} from './Components/Home';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       Grappa Systems Recruitment Exercise
     </h3>

     <NavMenu/>
     <Switch>
       <Route path='/' component={Home} exact/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
