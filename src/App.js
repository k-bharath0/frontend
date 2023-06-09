//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './ecommerce/Navigation';
import Products from './ecommerce/Products'
import Registeration from './ecommerce/Registration'
import NotFound from './ecommerce/NotFound';
import Login from './ecommerce/Login'
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navigation/>
           <Routes>
              <Route path='/' element={<Registeration/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/products' element={<Products/>}/>
             <Route path='*' element={<NotFound/>}/> 
           </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
