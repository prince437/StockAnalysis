import './App.css';
import Header from './Component/Header';
import Home from './asset/Home'
import About from './asset/About'
import Elearning from './asset/E-learning'
import Contact from './asset/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Component/Footer';
import StockDetailsPage from './asset/StockDetailsPage';

function App() {

  
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/"exact element={<Home/>}/>
    <Route path="/About"element={<About/>}/>
    <Route path="/E-learning"element={<Elearning/>}/>
    <Route path="/Contact"element={<Contact/>}/>
    <Route path="/stock-details/:symbol" element={StockDetailsPage(Symbol)} />
    </Routes>
    <Footer classname= "Footer"/>
    </BrowserRouter>
  );
};

export default App;
