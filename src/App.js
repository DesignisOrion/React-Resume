import Navbar from './Navbar'; // importing the navbar
import Home from './Home';

function App() {


  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home />
        </div>
    </div>
  );
}

export default App;
