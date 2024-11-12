import logo from './logo.svg';
import './App.css';
import LoginFormContainer from './Page/Container/LoginFormContainer';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<LoginFormContainer />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
