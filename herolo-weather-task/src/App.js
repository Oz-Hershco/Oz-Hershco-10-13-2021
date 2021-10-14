import './App.scss';
import Home from './Pages/Home/Home';
import TopNavigationBar from './Components/TopNavigationBar/TopNavigationBar';

function App() {
  return (
    <div className="App">
      <TopNavigationBar/>
      <Home />
    </div>
  );
}

export default App;
