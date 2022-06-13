import './App.css';
import {BrowserRouter as Router,  Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomponent from './Components/Navbarcomponent';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Addproduct from './Components/Addproduct';
import ListProduct from './Components/ListProduct';

function App() {
  return (
    <Router>
        <Navbarcomponent/>
        <main className='py-3'>

    <Routes>
    <Route path="/" element={<Registration/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/addproduct" element={<Addproduct/>}></Route>
    <Route path="/listproduct" element={<ListProduct/>}></Route>
    </Routes>
    </main>

  </Router>
  );
}

export default App;
