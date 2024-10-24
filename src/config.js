export const ROUTER = {
   main: '/',
   news: '/novosti',
   newsArticle: '/novosti/:id',
   galery: '/galery',
   galeryArticle: '/galery/:id',
   video: '/video',
   history: {
      main: '/istoriya',
      khimki: '/istoriya/istoriya-himki',
      pamyatnikiIstoriiKultury: '/istoriya/pamyatniki-istorii-kultury',
      gorodPobratim: '/istoriya/gorod-pobratim',
      cityCoatOfArms: '/istoriya/gerb-goroda',
      greatPatrioticWar: '/istoriya/velikaya-otechestvennaya-voyna',
   },

   khimkiDistrict: {
      main: '/gorodskoy-okrug-khimki',
      performanceIndicators: '/gorodskoy-okrug-khimki/pokazateli-raboty-administratsii',
      administrationStructure: '/gorodskoy-okrug-khimki/struktura-administratsii',
      administrationStructureMayor: '/gorodskoy-okrug-khimki/struktura-administratsii/mer',
      administrationStructurePerson: '/gorodskoy-okrug-khimki/struktura-administratsii/:person-',
      symbolism: '/gorodskoy-okrug-khimki/ustav-i-simvolika',
      publicChamber: '/gorodskoy-okrug-khimki/obschestvennaya-palata',
      publicChamberDocuments: '/gorodskoy-okrug-khimki/obschestvennaya-palata/dokumenty',
      publicChamberCandidates: '/gorodskoy-okrug-khimki/obschestvennaya-palata/kandidaty',
      listCommissionsPublicChamber: '/gorodskoy-okrug-khimki/obschestvennaya-palata/perechen-komissiy-obschestvennoy-palaty',
      auditChamber: '/gorodskoy-okrug-khimki/kontrolno-schetnaya-palata',
      tic: '/gorodskoy-okrug-khimki/territorialnaya-izbiratelnaya-komissiya-goroda-khimki',
      ticDocuments: '/gorodskoy-okrug-khimki/territorialnaya-izbiratelnaya-komissiya-goroda-khimki/dokumenty',
      contactInformation: '/gorodskoy-okrug-khimki/territorialnaya-izbiratelnaya-komissiya-goroda-khimki/kontaktnaya-informatsiya',
      publicOrganizations: '/gorodskoy-okrug-khimki/obschestvennyye-organizatsii',
      unionSummerResidents: '/gorodskoy-okrug-khimki/obschestvennyye-organizatsii/soyuz-dachnikov-podmoskovya',
      associationApartmentBuildingsKhimki: '/gorodskoy-okrug-khimki/obschestvennyye-organizatsii/assotsiatsiya-mkd-khimok',
      mooAgainstCorruption: '/gorodskoy-okrug-khimki/obschestvennyye-organizatsii/moo-protiv-korruptsii',
      governmentAgency: '/gorodskoy-okrug-khimki/gosudarstvennyye-organizatsii',
      informationSystems: '/gorodskoy-okrug-khimki/informatsionnyye-sistemy',
      scienceCity: '/gorodskoy-okrug-khimki/naukograd',
   },
   administrationStructure: {
      main: '/administrationStructure'
   },
   activity: {
      main: '/deyatelnost',
      auctionsAndTrades: '/deyatelnost/auktsiony-i-torgi',
      safety: {
         main: '/deyatelnost/bezopasnost',
         laborProtection: '/deyatelnost/bezopasnost/ohrana-truda',
         securityFacilitiesCityDistrict: '/deyatelnost/bezopasnost/obekty-bezopasnosti-gorodskogo-okruga'
      },
      improvement: '/deyatelnost/blagoustroystvo',
      publicPrivatePartnership: '/deyatelnost/gosudarstvenno-chastnoye-partnerstvo',
      communalServices: '/deyatelnost/zhkkh',
      healthcare: '/deyatelnost/zdravookhraneniye',
      land: '/deyatelnost/zemelnyye-uchastki-mnogodetnym-semyam',
      landRelations: '/deyatelnost/zemelnyye-otnosheniya',
      propertyRelations: '/deyatelnost/imuschestvennyye-otnosheniya',
      investities: '/deyatelnost/investitsii',
      participatoryBudgeting: '/deyatelnost/initsiativnoye-byudzhetirovaniye',
      humanResourcesManagement: '/deyatelnost/kadrovoye-upravleniye',
      commissionJuvenileAffairs: '/deyatelnost/komissiya-po-delam-nesovershennoletnikh',
      municipalСontrol: '/deyatelnost/munitsipalniy-kontrol',
      regulatoryImpactAssessment: '/deyatelnost/otsenka-reguliruyuschego-vozdeystviya',
      burialFuneralServices: '/deyatelnost/pogrebeniye-i-pokhoronnoye-delo',
      supportCONPO: '/deyatelnost/podderzhka-so-nko',
      antiCorruption: '/deyatelnost/protivodeystviye-korruptsii',
      publicHearingsPublicDiscussions: '/deyatelnost/publichnyye-slushaniya-i-obschestvennyye-obsuzhdeniya',
      construction: '/deyatelnost/stroitelstvo',
      transport: '/deyatelnost/transport',
      ecologyEnvironmentalSafety: '/deyatelnost/ekologiya-i-ekologicheskaya-bezopasnost',
      municipalPrograms: {
         main: '/deyatelnost/munitsipalnyye-programmy',
         healthCare: '/deyatelnost/munitsipalnyye-programmy/zdravoohranenie',
         socialProtectionOfThePopulation: '/deyatelnost/munitsipalnyye-programmy/socialnaya-zashita-naseleniya-gorodskogo-okruga-himki',
         formationModernUrbanEnvironment: '/deyatelnost/munitsipalnyye-programmy/formirovanie-sovremennoj-gorodskoj-sredy',
         housing: '/deyatelnost/munitsipalnyye-programmy/zhilishe'
      },
      socialPrograms: '/deyatelnost/sotsialnyye-programmy',
      outdoorAdvertising: '/deyatelnost/otdel-reklamy-mku-upravleniye-delami-administratsii',
      authorityFeldHandlingAnimalsWithoutOwners: '/deyatelnost/polnomochiya-v-oblasti-obrascheniya-s-zhivotnymi-bez-vladeltsev',
      smallMediumBusinesses: {
         main: '/deyatelnost/maloye-i-srednee-predprinimatelstvo',
         contests: '/deyatelnost/maloye-i-srednee-predprinimatelstvo/konkursy-na-predostavleniya-finansovoj-podderzhki'
      }

   },
   prosecutorOffice: {
      main: '/prokuratura',
      militaryProsecutorOfficeSolnechnogorskGarrison: '/prokuratura/voyennaya-prokuratura-solnechnogorskogo-garnizona',
      moscowInterregionalTransport: '/prokuratura/moskovskaya-mezhregionalnaya-transportnaya-prokuratura',
      correctionalInstitutions: '/prokuratura/moskovskaya-mezhregionalnaya-transportnaya-prokuratura',
      correctionalInstitutions: '/prokuratura/moskovskaya-prokuratura-po-nadzoru-za-soblyudeniyem-zakonov-v-ispravitelnykh-uchrezhdeniyakh-moskovskoy-oblasti',
      northernTransportProsecutorOffice: '/prokuratura/severnaya-transportnaya-prokuratura',
      legalEducationAndLegalInformation: '/prokuratura/pravovoe-prosveshenie-i-pravovoe-informirovanie'
   },
   citizensAppeals: {
      main: '/obrascheniya-grazhdan',
      legalRegulation: '/obrascheniya-grazhdan/pravovoye-regulirovaniye',
      resultsConsiderationApplications: '/obrascheniya-grazhdan/rezultaty-rassmotreniya-obrascheniy',
      virtualReceptionHeadCityDistrict: '/obrascheniya-grazhdan/virtualnaya-priyemnaya-glavy-gorodskogo-okruga',
      writeAdministration: '/obrascheniya-grazhdan/napisat-v-administratsiyu',
      receptionProcedureTime: '/obrascheniya-grazhdan/grafik-lichnogo-priyoma-grazhdan-glavoy-gorodskogo-okruga-i-zamestitelyami-glavy',
      allRussianDayReceptionCitizens: '/obrascheniya-grazhdan/obscherossiyskiy-den-priyoma-grazhdan',
      informationForReview: '/obrascheniya-grazhdan/informatsiya-dlya-oznakomleniya-zhelayuschim-otpravit-obrascheniye-v-forme-elektronnogo-dokumenta',
      responsesInquiriesIndefiniteNumberPersons: '/obrascheniya-grazhdan/otvety-na-obrascheniya-zatragivayuschiye-interesy-neopredelennogo-kruga-lits',
   },
   contacts: {
      main: '/contacts'
   },
   events: {
      /* main: '/sobytiya', */
      khimkiCityDay: '/sobytiya/den-goroda-khimki',
      savePast: '/sobytiya/sokhranyaya-proshloye-zaschischayem-buduschee',
   },
   successSubscribe: '/vy-uspeshno-podpisalis'
}