import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Primimum from './components/primium/Primimum';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import './App.css'
import Show from './components/show/Show';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/show' element={<Show/>}/>
        <Route path='/subscribe' element={<Primimum/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
