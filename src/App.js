import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

// https://danapeyvast.com/products/koncrete-wp-theme/landing/
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Body/>
    </div>
  );
}

export default App;
