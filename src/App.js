import './App.css';
import Home from './components/Home'
import Header from './components/Header';
import { Route,Routes} from "react-router-dom";
import Fav from './components/Fav';


function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="fav" element={<Fav />} />
      </Routes>
    </>
    
  );
}

export default App;
