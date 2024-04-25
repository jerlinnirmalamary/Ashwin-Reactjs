import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Parent from './component/Parent';
import Child from './component/Child';
function App() {

  return (
    <>
      {/* <BrowserRouter> */}
      
      <Router>
          <div>
            <ul>
              <li><Link to={"/"}>Home</Link></li> 
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/parent"}>Parent</Link></li>
              <li><Link to={"/child"}>Child</Link></li>
            </ul>
            <hr />
            <Switch>
              <Route exact path='/'/> 
              <Home />
              <Route path='/about'/>
              <About />
              <Route path='/parent'/>
              <Parent />
              <Route path='/child'/>
              <Child />
            </Switch>
          </div>


      </Router>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App;
