import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import { ThemeProvider } from './context/ThemeContext';
import './components/style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
      <App/>
  </ThemeProvider>
);