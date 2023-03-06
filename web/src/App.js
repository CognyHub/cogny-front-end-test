import './App.css';
import Provider from './context/provider';
import AppRoute from './routes';

function App() {
  return (
    <div className="App">
      <Provider>
        <AppRoute />
      </Provider>
    </div>
  );
}

export default App;
