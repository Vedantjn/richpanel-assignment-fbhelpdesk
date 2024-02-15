import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ConnectPage from './components/ConnectPage';
import DeleteDisconnect from './components/DeleteDisconnectPage';
import AgentScreen from './components/AgentScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connect-page" element={<ConnectPage />} />
          <Route path="/delete-disconnect" element={<DeleteDisconnect />} />
          <Route path="/agent-screen" element={<AgentScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
