import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Amsterdam from './pages/Amsterdam'
import Sydney from './pages/Sydney'
import Contacts from './pages/Contacts'



import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Amsterdam" element={<Amsterdam />} />
        <Route path="/Sydney" element={<Sydney />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="*" element={<h2>Error 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
