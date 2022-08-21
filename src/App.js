import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Menu from './component/Menu';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Contacts from './component/Contacts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
         <Route path='/contact' element={<Contacts/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
      {/* <Home/> */}
   
    </div>
  );
}

export default App;
