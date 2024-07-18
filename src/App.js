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
import GaleryArticle from './Pages/GaleryArticle';
import VideoPage from './Pages/VideoPage';
import History from './Pages/History';
import HistoryKhimki from './Pages/HistoryKhimki';
import MonumentsHistoryArt from './Pages/MonumentsHistoryArt';
import GorodPobratim from './Pages/CityCoatOfArms';
import CityCoatOfArms from './Pages/CityCoatOfArms';
import Table from './Components/Table';

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
               <Route path={ROUTER.galeryArticle} element={<GaleryArticle/>} />
               <Route path={ROUTER.video} element={<VideoPage/>} />
               <Route path={ROUTER.history} element={<History/>} />
               <Route path={ROUTER.historyKhimki} element={<HistoryKhimki/>} />
               <Route path={ROUTER.pamyatnikiIstoriiKultury} element={<MonumentsHistoryArt/>} />
               <Route path={ROUTER.gorodPobratim} element={<GorodPobratim/>} />
               <Route path={ROUTER.cityCoatOfArms} element={<CityCoatOfArms/>} />
               <Route path={ROUTER.table} element={<Table/>} />
                
            </Routes>
         </div>

         <Footer />
         
      </div>
   );
}

export default App;
