import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Header/Header';
import Home from './Home/Home';
import Appointments from './AppointmentPage/Appointments';
import Login from './Authentication/Login';

function App() {

  return (
    <div className='px-12'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointments></Appointments>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
    </div>
  );
}

export default App;
