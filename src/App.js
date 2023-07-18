import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import UserList from './pages/UserList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
       <TopBar/>
       <div className="container">
        <Sidebar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={<UserList/>}/>
        </Routes>
          
       </div> 
    </BrowserRouter>
  )
}

export default App;
