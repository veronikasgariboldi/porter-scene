import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import Scene from './pages/scene';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter basename="/porter-scene">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/scene" element={<Scene/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
