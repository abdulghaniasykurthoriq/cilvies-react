import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import RoutePage from './route'
import { Provider } from 'react-redux';
import { store } from './config';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
         <RoutePage/>
      </Provider>
    </div>
  );
}

export default App;
