import 'bootstrap/dist/css/bootstrap.css'
import './assets/style.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from './layout/RouterConfig'
import { useGlobalState, Context } from './utils/context';
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

function App() {
  return (
    <Context.Provider value={useGlobalState()}>
      <Router>
        <RouterConfig />
      </Router>
    </Context.Provider>
  );
}

export default App