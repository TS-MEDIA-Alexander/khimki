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
/* import GaleryPage from './Pages/GaleryPage'; */
/* import GaleryArticle from './Pages/GaleryArticle'; */
/* import VideoPage from './Pages/VideoPage'; */
import History from './Pages/History';
import HistoryKhimki from './Pages/HistoryKhimki';
import MonumentsHistoryArt from './Pages/MonumentsHistoryArt';
import GorodPobratim from './Pages/GorodPobratim';
import CityCoatOfArms from './Pages/CityCoatOfArms';
import KhimkiDistrict from './Pages/KhimkiDistrict';
import PerformanceIndicators from './Pages/PerformanceIndicators';
import AdministrationStructure from './Pages/AdministrationStructure';
import AdministrationStructureMayor from './Pages/AdministrationStructureMayor';
import AdministrationStructurePerson  from './Pages/AdministrationStructurePerson';
import Symbolism  from './Pages/Symbolism';
import GreatPatrioticWar  from './Pages/GreatPatrioticWar';
import PublicChamber  from './Pages/PublicChamber';
import AuditChamber  from './Pages/AuditChamber';
import TIC  from './Pages/TIC';
import TICDocuments  from './Pages/TICDocuments';
import ContactInformation  from './Pages/ContactInformation';
import PublicChamberDocuments  from './Pages/PublicChamberDocuments';
import PublicChamberCandidates  from './Pages/PublicChamberCandidates';
import PublicChamberListCommissions  from './Pages/PublicChamberListCommissions';
import PublicOrganizations  from './Pages/PublicOrganizations';
import UnionSummerResidents  from './Pages/UnionSummerResidents';
import AssociationApartmentBuildingsKhimki  from './Pages/AssociationApartmentBuildingsKhimki';
import MOOAgainstCorruption  from './Pages/MOOAgainstCorruption';
import GovernmentAgency from './Pages/GovernmentAgency';
import InformationSystems from './Pages/InformationSystems';
import Activity from './Pages/Activity';
import AuctionsAndTrades from './Pages/AuctionsAndTrades';
import Safety from './Pages/Safety';
import Improvement from './Pages/Improvement';
import PublicPrivatePartnership from './Pages/PublicPrivatePartnership';
import CommunalServices from './Pages/CommunalServices';
import Healthcare from './Pages/Healthcare';
import Land from './Pages/Land';
/* import Table from './Components/Table'; */

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
               {/* <Route path={ROUTER.galery} element={<GaleryPage />} /> */}
               {/* <Route path={ROUTER.galeryArticle} element={<GaleryArticle />} /> */}
               {/* <Route path={ROUTER.video} element={<VideoPage />} /> */}

               <Route path={ROUTER.history.main} element={<History />} />
               <Route path={ROUTER.history.khimki} element={<HistoryKhimki />} />
               <Route path={ROUTER.history.pamyatnikiIstoriiKultury} element={<MonumentsHistoryArt />} />
               <Route path={ROUTER.history.gorodPobratim} element={<GorodPobratim />} />
               <Route path={ROUTER.history.cityCoatOfArms} element={<CityCoatOfArms />} />
               <Route path={ROUTER.history.greatPatrioticWar} element={<GreatPatrioticWar />} />

               {/* <Route path={ROUTER.table} element={<Table />} /> */}

               <Route path={ROUTER.khimkiDistrict.main} element={<KhimkiDistrict />} />
               <Route path={ROUTER.khimkiDistrict.performanceIndicators} element={<PerformanceIndicators />} />
               <Route path={ROUTER.khimkiDistrict.administrationStructure} element={<AdministrationStructure />} />
               <Route path={ROUTER.khimkiDistrict.administrationStructureMayor} element={<AdministrationStructureMayor />} />
               <Route path={ROUTER.khimkiDistrict.administrationStructurePerson} element={<AdministrationStructurePerson />} />
               <Route path={ROUTER.khimkiDistrict.symbolism} element={<Symbolism  />} />
               <Route path={ROUTER.khimkiDistrict.publicChamber} element={<PublicChamber />} />
               <Route path={ROUTER.khimkiDistrict.publicChamberDocuments} element={<PublicChamberDocuments />} />
               <Route path={ROUTER.khimkiDistrict.publicChamberCandidates} element={<PublicChamberCandidates />} />
               <Route path={ROUTER.khimkiDistrict.listCommissionsPublicChamber} element={<PublicChamberListCommissions />} />
               <Route path={ROUTER.khimkiDistrict.auditChamber} element={<AuditChamber />} />
               <Route path={ROUTER.khimkiDistrict.tic} element={<TIC />} />
               <Route path={ROUTER.khimkiDistrict.ticDocuments} element={<TICDocuments />} />
               <Route path={ROUTER.khimkiDistrict.contactInformation} element={<ContactInformation />} />
               <Route path={ROUTER.khimkiDistrict.publicOrganizations} element={<PublicOrganizations />} />
               <Route path={ROUTER.khimkiDistrict.unionSummerResidents} element={<UnionSummerResidents />} />
               <Route path={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} element={<AssociationApartmentBuildingsKhimki />} />
               <Route path={ROUTER.khimkiDistrict.mooAgainstCorruption} element={<MOOAgainstCorruption />} />
               <Route path={ROUTER.khimkiDistrict.governmentAgency} element={<GovernmentAgency />} />
               <Route path={ROUTER.khimkiDistrict.informationSystems} element={<InformationSystems />} />

               <Route path={ROUTER.activity.main} element={<Activity />} />
               <Route path={ROUTER.activity.auctionsAndTrades} element={<AuctionsAndTrades />} />
               <Route path={ROUTER.activity.safety} element={<Safety />} />
               <Route path={ROUTER.activity.improvement} element={<Improvement />} />
               <Route path={ROUTER.activity.publicPrivatePartnership} element={<PublicPrivatePartnership />} />
               <Route path={ROUTER.activity.communalServices} element={<CommunalServices />} />
               <Route path={ROUTER.activity.healthcare} element={<Healthcare />} />
               <Route path={ROUTER.activity.land} element={<Land />} />
            </Routes>
         </div>

         <UsefulSourse />
         <Footer />

      </div>
   );
}

export default App;
