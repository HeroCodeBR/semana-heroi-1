import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { RouteApp } from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <RouteApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
