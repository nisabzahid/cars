import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AppProvider from './context/AppContext';
function App() {
  return (
    <AppProvider>
    {/* <div className="App"> */}
      {/* <header className="App-header"> */}
        <Home />
      {/* </header> */}
    {/* </div> */}
    </AppProvider>
    
  );
}

export default App;
