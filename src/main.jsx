import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <GlobalStyles />
            <App />
        </Router>
    </React.StrictMode>,
);
