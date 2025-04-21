import { useEffect } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTER } from './config';
import './App.css';
/* Components */

/* Pages */
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
import ScienceCity from './Pages/ScienceCity';
import AdministrationStructure from './Pages/AdministrationStructure';
/* import AdministrationStructureMayor from './Pages/AdministrationStructureMayor'; */
import AdministrationStructurePerson from './Pages/AdministrationStructurePerson';
import Symbolism from './Pages/Symbolism';
import GreatPatrioticWar from './Pages/GreatPatrioticWar';
import PublicChamber from './Pages/PublicChamber';
import AuditChamber from './Pages/AuditChamber';
import TIC from './Pages/TIC';
import TICDocuments from './Pages/TICDocuments';
import ContactInformation from './Pages/ContactInformation';
import PublicChamberDocuments from './Pages/PublicChamberDocuments';
import PublicChamberCandidates from './Pages/PublicChamberCandidates';
import PublicChamberListCommissions from './Pages/PublicChamberListCommissions';
import PublicOrganizations from './Pages/PublicOrganizations';
import UnionSummerResidents from './Pages/UnionSummerResidents';
import AssociationApartmentBuildingsKhimki from './Pages/AssociationApartmentBuildingsKhimki';
import MOOAgainstCorruption from './Pages/MOOAgainstCorruption';
import GovernmentAgency from './Pages/GovernmentAgency';
import InformationSystems from './Pages/InformationSystems';
import Activity from './Pages/Activity';
import AuctionsAndTrades from './Pages/AuctionsAndTrades';
import Safety from './Pages/Safety';
import MemorialServicesCenter from './Pages/MemorialServicesCenter';
import Improvement from './Pages/Improvement';
import PublicPrivatePartnership from './Pages/PublicPrivatePartnership';
import CommunalServices from './Pages/CommunalServices';
import Healthcare from './Pages/Healthcare';
import Land from './Pages/Land';
import LandRelations from './Pages/LandRelations';
import PropertyRelations from './Pages/PropertyRelations';
import Investities from './Pages/Investities';
import ParticipatoryBudgeting from './Pages/ParticipatoryBudgeting';
import SmallMediumBusinesses from './Pages/SmallMediumBusinesses';
import HumanResourcesManagement from './Pages/HumanResourcesManagement';
import CommissionJuvenileAffairs from './Pages/CommissionJuvenileAffairs';
import MunicipalСontrol from './Pages/MunicipalСontrol';
import RegulatoryImpactAssessment from './Pages/RegulatoryImpactAssessment';
import BurialFuneralServices from './Pages/BurialFuneralServices';
import SupportCONPO from './Pages/SupportCONPO';
import AntiCorruption from './Pages/AntiCorruption';
import PublicHearingsPublicDiscussions from './Pages/PublicHearingsPublicDiscussions';
import Construction from './Pages/Construction';
import Transport from './Pages/Transport';
import EcologyEnvironmentalSafety from './Pages/EcologyEnvironmentalSafety';
import MunicipalPrograms from './Pages/MunicipalPrograms';
import SocialPrograms from './Pages/SocialPrograms';
import OutdoorAdvertising from './Pages/OutdoorAdvertising';
import AuthorityFeldHandlingAnimalsWithoutOwners from './Pages/AuthorityFeldHandlingAnimalsWithoutOwners';
import ProsecutorOffice from './Pages/ProsecutorOffice';
import MilitaryProsecutorOfficeSolnechnogorskGarrison from './Pages/MilitaryProsecutorOfficeSolnechnogorskGarrison';
import MoscowInterregionalTransport from './Pages/MoscowInterregionalTransport';
import CorrectionalInstitutions from './Pages/CorrectionalInstitutions';
import NorthernTransportProsecutorOffice from './Pages/NorthernTransportProsecutorOffice';
import CitizensAppeals from './Pages/CitizensAppeals';
import LegalRegulation from './Pages/LegalRegulation';
import ResultsConsiderationApplications from './Pages/ResultsConsiderationApplications';
import VirtualReceptionHeadCityDistrict from './Pages/VirtualReceptionHeadCityDistrict';
import WriteAdministration from './Pages/WriteAdministration';
import ReceptionProcedureTime from './Pages/ReceptionProcedureTime';
import AllRussianDayReceptionCitizens from './Pages/AllRussianDayReceptionCitizens';
import InformationForReview from './Pages/InformationForReview';
import ResponsesInquiriesIndefiniteNumberPersons from './Pages/ResponsesInquiriesIndefiniteNumberPersons';
import VisitingAdministration from './Pages/VisitingAdministration';
import KhimkiCityDay from './Pages/KhimkiCityDay';
import Contacts from './Pages/Contacts';
import PageNotFound from './Pages/PageNotFound';
import SuccessSubscribe from './Pages/SuccessSubscribe';
import SavePast from './Pages/SavePast';
import ContestsFinancialSupport from './Pages/ContestsFinancialSupport';
import SchoolMuseumFestival from './Pages/SchoolMuseumFestival';
import PoliticsCookie from './Pages/PoliticsCookie';
import LoginPage from './PagesAdmin/LoginPage';
import MainContainerAdmin from './PagesAdmin/MainContainerAdmin';
import NewsArticlePageEdit from './PagesAdmin/NewsArticlePageEdit';
import NewsPageList from './ComponentsAdmin/NewsPageList';
import AdmNewsArcticlePage from './PagesAdmin/AdmNewsArticlePage'
import MainContainer from './Pages/MainContainer';

/* import Table from './Components/Table'; */

function App() {

   /* Чтобы чере NavLink страница всегда открывалась в начале  */
   const location = useLocation();
   useEffect(() => {
      // Scroll top when location changes
      window.scrollTo(0, 0);

      //Смена title при загрузске страницы
      const title = document.querySelector('.pageTitle')?.innerHTML.replace(/(<([^>]+)>)/ig, '');
      if (title) {
         document.title = title;
      } else document.title = 'Городской округ Химки';
   }, [location]);

   return (
      <div className="App">


         <div className="wrapper">
            <Routes>
            <Route path={ROUTER.main} element={<MainContainer  />} >
               <Route path={ROUTER.main} element={<Main />} />
               <Route path={ROUTER.news} element={<NewsPage />} />
               <Route path={ROUTER.politicsCookie} element={<PoliticsCookie />} />
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
               {/* <Route path={ROUTER.khimkiDistrict.administrationStructureMayor} element={<AdministrationStructureMayor />} /> */}
               <Route path={ROUTER.khimkiDistrict.administrationStructurePerson} element={<AdministrationStructurePerson />} />
               <Route path={ROUTER.khimkiDistrict.symbolism} element={<Symbolism />} />
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
               <Route path={ROUTER.khimkiDistrict.scienceCity} element={<ScienceCity />} />

               <Route path={ROUTER.activity.main} element={<Activity />} />
               <Route path={ROUTER.activity.auctionsAndTrades} element={<AuctionsAndTrades />} />
               <Route path={ROUTER.activity.safety} element={<Safety />} />
               <Route path={ROUTER.activity.burialFuneralServices.memorialServicesCenter} element={<MemorialServicesCenter />} />
               <Route path={ROUTER.activity.improvement} element={<Improvement />} />
               <Route path={ROUTER.activity.publicPrivatePartnership} element={<PublicPrivatePartnership />} />
               <Route path={ROUTER.activity.communalServices} element={<CommunalServices />} />
               <Route path={ROUTER.activity.healthcare} element={<Healthcare />} />
               <Route path={ROUTER.activity.land} element={<Land />} />
               <Route path={ROUTER.activity.landRelations} element={<LandRelations />} />
               <Route path={ROUTER.activity.propertyRelations} element={<PropertyRelations />} />
               <Route path={ROUTER.activity.investities} element={<Investities />} />
               <Route path={ROUTER.activity.participatoryBudgeting} element={<ParticipatoryBudgeting />} />
               <Route path={ROUTER.activity.smallMediumBusinesses.main} element={<SmallMediumBusinesses />} />
               <Route path={ROUTER.activity.smallMediumBusinesses.contests} element={<ContestsFinancialSupport />} />
               <Route path={ROUTER.activity.humanResourcesManagement} element={<HumanResourcesManagement />} />
               <Route path={ROUTER.activity.commissionJuvenileAffairs} element={<CommissionJuvenileAffairs />} />
               <Route path={ROUTER.activity.municipalСontrol} element={<MunicipalСontrol />} />
               <Route path={ROUTER.activity.regulatoryImpactAssessment} element={<RegulatoryImpactAssessment />} />
               <Route path={ROUTER.activity.burialFuneralServices.main} element={<BurialFuneralServices />} />
               <Route path={ROUTER.activity.supportCONPO} element={<SupportCONPO />} />
               <Route path={ROUTER.activity.antiCorruption} element={<AntiCorruption />} />
               <Route path={ROUTER.activity.publicHearingsPublicDiscussions} element={<PublicHearingsPublicDiscussions />} />
               <Route path={ROUTER.activity.construction} element={<Construction />} />
               <Route path={ROUTER.activity.transport} element={<Transport />} />
               <Route path={ROUTER.activity.ecologyEnvironmentalSafety} element={<EcologyEnvironmentalSafety />} />
               <Route path={ROUTER.activity.municipalPrograms} element={<MunicipalPrograms />} />
               <Route path={ROUTER.activity.socialPrograms} element={<SocialPrograms />} />
               <Route path={ROUTER.activity.outdoorAdvertising} element={<OutdoorAdvertising />} />
               <Route path={ROUTER.activity.authorityFeldHandlingAnimalsWithoutOwners} element={<AuthorityFeldHandlingAnimalsWithoutOwners />} />

               <Route path={ROUTER.prosecutorOffice.main} element={<ProsecutorOffice />} />
               <Route path={ROUTER.prosecutorOffice.militaryProsecutorOfficeSolnechnogorskGarrison} element={<MilitaryProsecutorOfficeSolnechnogorskGarrison />} />
               <Route path={ROUTER.prosecutorOffice.moscowInterregionalTransport} element={<MoscowInterregionalTransport />} />
               <Route path={ROUTER.prosecutorOffice.correctionalInstitutions} element={<CorrectionalInstitutions />} />
               <Route path={ROUTER.prosecutorOffice.northernTransportProsecutorOffice} element={<NorthernTransportProsecutorOffice />} />

               <Route path={ROUTER.citizensAppeals.main} element={<CitizensAppeals />} />
               <Route path={ROUTER.citizensAppeals.legalRegulation} element={<LegalRegulation />} />
               <Route path={ROUTER.citizensAppeals.resultsConsiderationApplications} element={<ResultsConsiderationApplications />} />
               <Route path={ROUTER.citizensAppeals.virtualReceptionHeadCityDistrict} element={<VirtualReceptionHeadCityDistrict />} />
               <Route path={ROUTER.citizensAppeals.writeAdministration} element={<WriteAdministration />} />
               <Route path={ROUTER.citizensAppeals.receptionProcedureTime} element={<ReceptionProcedureTime />} />
               <Route path={ROUTER.citizensAppeals.allRussianDayReceptionCitizens} element={<AllRussianDayReceptionCitizens />} />
               <Route path={ROUTER.citizensAppeals.informationForReview} element={<InformationForReview />} />
               <Route path={ROUTER.citizensAppeals.responsesInquiriesIndefiniteNumberPersons} element={<ResponsesInquiriesIndefiniteNumberPersons />} />
               <Route path={ROUTER.citizensAppeals.visitingAdministration} element={<VisitingAdministration />} />

               <Route path={ROUTER.contacts.main} element={<Contacts />} />

               <Route path={ROUTER.events.khimkiCityDay} element={<KhimkiCityDay />} />
               <Route path={ROUTER.events.savePast} element={<SavePast />} />
               <Route path={ROUTER.events.schoolMuseumFestival} element={<SchoolMuseumFestival />} />

               <Route path={ROUTER.successSubscribe} element={<SuccessSubscribe />} />
            </Route>
               {/* Временно */}

               <Route path={ROUTER.khimkiDistrict.administrationStructureMayor} element={<PageNotFound />} />
               <Route path='*' element={<PageNotFound />} />




               {/* Админка */}

               <Route path={ROUTER.admin.login} element={<LoginPage />} />

               <Route patch={ROUTER.admin.main} element={<MainContainerAdmin />}>

                  <Route path={ROUTER.admin.news} element={<NewsPageList />} />
                  <Route path={ROUTER.admin.AdmNewsArcticlePage} element={<AdmNewsArcticlePage />} />
                  <Route path={ROUTER.admin.newsArticleEdit} element={<NewsArticlePageEdit />} />

               </Route>

            </Routes>
         </div>


      </div>
   );
}

export default App;
