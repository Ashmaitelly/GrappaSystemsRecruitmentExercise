import './App.css';


import {NavMenu} from './Components/NavMenu';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       Grappa Systems Recruitment Exercise
     </h3>

     <NavMenu/>
    </div>
    </BrowserRouter>
  );
}

export default App;
