import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Map from './Components/Map';
import Main from './Pages/Main';

function App() {
   return (
      <div className="App">
         {/* <Map/> */}
         <Header />

         <div className="wrapper">
            <Routes>
               <Route path="/" element={<Main />} />
            </Routes>
         </div>

         <Footer />
      </div>
   );
}

export default App;
