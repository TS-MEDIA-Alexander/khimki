import { Route, Routes } from 'react-router-dom';
import './App.css';
/* Components */
import Footer from './Components/Footer';
import Header from './Components/Header';
/* Pages */
/* import Map from './Components/Map'; */
import Main from './Pages/Main';
import NewsPage from './Pages/News';
import ScrollButton from './utils/ScrollButton';

function App() {
   return (
      <div className="App">
         {/* <Map/> */}
         <Header />

         <div className="wrapper">
            <Routes>
               <Route path="/" element={<Main />} />
               <Route path="/news" element={<NewsPage />} />
            </Routes>
         </div>

         <Footer />
         <ScrollButton/>
      </div>
   );
}

export default App;
