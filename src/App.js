import './App.css';
import { Routes, Route } from "react-router-dom";
import Products from './products';
import Users from './users';

function App() {
  return (
    <div className="App">
      Hello welcome!!!
      <Routes>
        <Route exact path='/' element={<Users />} />
        <Route exact path='/products/:id' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
