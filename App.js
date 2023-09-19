import './App.css';
import NavComp from './Component/NavComp';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Home from './Component/Home';
import Store from './Component/Store';
import Success from './Component/Success';
import Cancel from './Component/Cancel';

function App() {
  return (
    <Container>
      <NavComp></NavComp>
      <BrowserRouter>
        <Routes>
          <Route path="/Store" element={<Store />} ></Route>
          <Route path="/Success" element={<Success />} ></Route>
          <Route path="/Cancel" element={<Cancel />} ></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
