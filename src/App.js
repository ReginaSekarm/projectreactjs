import { Routes, Route } from 'react-router-dom';
import Regina from './pages/regina';
import Nilam from './pages/nilam';
import Sinta from './pages/sinta';

function App() {
  return (
    <Routes>
      <Route path="/regina" element={<Regina />} />
      <Route path="/nilam" element={<Nilam />} />
      <Route path="/sinta" element={<Sinta />} />
    </Routes>
  );
}

export default App;