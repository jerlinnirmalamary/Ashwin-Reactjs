import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import { BrowserRouter, Routes , Route, Link } from 'react-router-dom';

function App() {


  return (
    <div>
        {/* <Home />
        <About />
        <Contact /> */}
        {/*  */}

        {/* <BrowserRouter>
          <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
          </Routes>
        </BrowserRouter> */}

        {/*  */}

        {/* <BrowserRouter>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            
            </ul>
          <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
              
          </Routes>
        </BrowserRouter> */}




        {/* it get parameters */}
        <BrowserRouter>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/user/1'>User 1</Link></li>
                <li><Link to='/user/2'>User 2</Link></li>
                <li><Link to='/user/3'>User 3</Link></li>
            </ul>
          <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/user/:id' element={<User />}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
