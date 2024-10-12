import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import WarehouseList from './components/WarehouseList';
import WarehouseDetail from './components/WarehouseDetails';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WarehouseList />} />
        <Route path="/warehouse/:id" element={<WarehouseDetail />} />
      </Routes>
    </Router>
  );
}

export default App