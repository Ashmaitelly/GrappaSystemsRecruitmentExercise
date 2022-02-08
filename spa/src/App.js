import './App.css';


import {NavMenu} from './Components/NavMenu';
import {Home} from './Components/Home';
import {Search} from './Components/Search';
import {Movie} from './Components/Movie';
import {Cast} from './Components/Cast';

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
       <Route path='/search' component={Search}/>
       <Route path='/movie' component={Movie}/>
       <Route path='/cast' component={Cast}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
