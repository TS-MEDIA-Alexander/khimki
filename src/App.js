import { Route, Routes } from 'react-router-dom';
import {ROUTER} from './config';
import './App.css';
/* Components */
import Footer from './Components/Footer';
import Header from './Components/Header';
/* Pages */
/* import Map from './Components/Map'; */
import Main from './Pages/Main';
import NewsPage from './Pages/News';
import NewsArticle from './Pages/NewsArticle';
import GaleryPage from './Pages/GaleryPage';

function App() {
   return (
      <div className="App">
         {/* <Map/> */}
         <Header />

         <div className="wrapper">
            <Routes>
               <Route path={ROUTER.main} element={<Main />} />
               <Route path={ROUTER.news} element={<NewsPage />} />
               <Route path={ROUTER.newsArticle} element={<NewsArticle/>} />
               <Route path={ROUTER.galery} element={<GaleryPage/>} />
               
            </Routes>
         </div>

         <Footer />
         
      </div>
   );
}

export default App;
