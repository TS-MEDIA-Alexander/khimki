import { Route, Routes } from 'react-router-dom';
import {ROUTER} from './config';
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
               <Route path={ROUTER.history.src} element={<History/>} />
               <Route path={ROUTER.history.khimki} element={<HistoryKhimki/>} />
               <Route path={ROUTER.history.pamyatnikiIstoriiKultury} element={<MonumentsHistoryArt/>} />
               <Route path={ROUTER.history.gorodPobratim} element={<GorodPobratim/>} />
               <Route path={ROUTER.history.cityCoatOfArms} element={<CityCoatOfArms/>} />
               <Route path={ROUTER.table} element={<Table/>} />
               <Route path={ROUTER.khimkiDistrict} element={<KhimkiDistrict/>} />
            </Routes>
         </div>

         <UsefulSourse/>
         <Footer />
         
      </div>
   );
}

export default App;
