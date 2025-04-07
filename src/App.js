import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import Scene from './pages/scene';
import Header from './components/header';
import DetailedInfo from './pages/detailed-info';
import Footer from './components/footer';

function App() {
  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/scene" element={<Scene/>} />
        <Route path="/detailed-info" element={<DetailedInfo/>} />
      </Routes>
      <div className="footer">
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
