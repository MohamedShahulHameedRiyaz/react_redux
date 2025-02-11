import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/configureStore.dev';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);
