import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppProvider from './context/appContext';
import { Companies } from './views/Companies';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Companies />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
