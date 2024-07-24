import { useEffect } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTER } from './config';
import './App.css';
/* Components */
import Footer from './Components/Footer';
import Header from './Components/Header';
import UsefulSourse from './Components/UsefulSourse';

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
import GorodPobratim from './Pages/GorodPobratim';
import CityCoatOfArms from './Pages/CityCoatOfArms';
import KhimkiDistrict from './Pages/KhimkiDistrict';
import PerformanceIndicators from './Pages/PerformanceIndicators';
import AdministrationStructure from './Pages/AdministrationStructure';
import Table from './Components/Table';

function App() {

   /* Чтобы чере NavLink страница всегда открывалась в начале  */
   const location = useLocation(); 
   useEffect(() => {
      // Scroll top when location changes
      window.scrollTo(0, 0);
   }, [location]);

   return (
      <div className="App">
         {/* <Map/> */}
         <Header />

         <div className="wrapper">
            <Routes>
               <Route path={ROUTER.main} element={<Main />} />
               <Route path={ROUTER.news} element={<NewsPage />} />
               <Route path={ROUTER.newsArticle} element={<NewsArticle />} />
               <Route path={ROUTER.galery} element={<GaleryPage />} />
               <Route path={ROUTER.galeryArticle} element={<GaleryArticle />} />
               <Route path={ROUTER.video} element={<VideoPage />} />
               <Route path={ROUTER.history.main} element={<History />} />
               <Route path={ROUTER.history.khimki} element={<HistoryKhimki />} />
               <Route path={ROUTER.history.pamyatnikiIstoriiKultury} element={<MonumentsHistoryArt />} />
               <Route path={ROUTER.history.gorodPobratim} element={<GorodPobratim />} />
               <Route path={ROUTER.history.cityCoatOfArms} element={<CityCoatOfArms />} />
               <Route path={ROUTER.table} element={<Table />} />
               <Route path={ROUTER.khimkiDistrict.main} element={<KhimkiDistrict />} />
               <Route path={ROUTER.khimkiDistrict.performanceIndicators} element={<PerformanceIndicators />} />
               <Route path={ROUTER.khimkiDistrict.administrationStructure} element={<AdministrationStructure />} />
            </Routes>
         </div>

         <UsefulSourse />
         <Footer />

      </div>
   );
}

export default App;
