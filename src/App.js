import "@flaticon/flaticon-uicons/css/all/all.css";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import "aos/dist/aos.css";

import Header from "./components/general/header";
import HomePage from "./pages/home";
import Products from "./pages/projucts";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Footer from "./components/general/footer";

function App() {
  return (
    <div className="App">
      {/* App Header */}
      <Header />

      {/* App Routes */}
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}
 
export default App;
