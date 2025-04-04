import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import Scene from './pages/scene';
import Header from './components/header';
import DetailedInfo from './pages/detailed-info';

function App() {
  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/scene" element={<Scene/>} />
        <Route path="/detailed-info" element={<DetailedInfo/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
