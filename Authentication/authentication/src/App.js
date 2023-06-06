
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';
import ChangePassword from './Components/ChangePassword/ChangePassword'
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/sign-up' element= {<SignUp/>} />
      <Route path='/profile' element= {<ChangePassword/>} />
      <Route path='/sign-in' element= {<SignIn/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
