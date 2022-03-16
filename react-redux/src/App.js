import './App.css';
import { Provider } from 'react-redux';
import store from './app/store'
import { Counter } from './features/counter/counter';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
