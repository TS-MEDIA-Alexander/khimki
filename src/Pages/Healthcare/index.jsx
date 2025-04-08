import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './Healthcare.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import HealthcareBanner from '../../BannersComopnents/HealthcareBanner';

import LinkContainer from '../../Components/LinkContainer';

const Healthcare = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Здравоохранение</span>
            </div>
            <div className={`mt24 pageTitle`}>Здравоохранение</div>

            <div className={s.containtContainer}>
               <div className="mt80">
                  <HealthcareBanner />
               </div>

               <div className={`mt80 borderMain ${s.linkContainer}`}>
                  <LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zdravoohranenie/grafik-raboty-uchrezhdenij-zdravoohraneniya-v-prazdnechnii-dni/' text={'График работы учреждений здравоохранения в праздничные дни'} />
                  <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zdravoohranenie/dispanserizaciya/' text={'Диспансеризация'} /></div>
                  <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zdravoohranenie/ekspertnoe-mnenie/' text={'Экспертное мнение'} /></div>
                  <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zdravoohranenie/aptechnye-organizacii/' text={'Аптечные организации'} /></div>
               </div>

               <div className={`mt80 text`}>
                  <div className="mt38 pageSubtitle">Маркировка лекарственных препаратов</div>
                  <p>
                     Пунктом 5 Перечня поручений Президента Российской Федерации по итогам совещания с членами Правительства Российской Федерации от 04.02.2015 дано поручение обеспечить разработку и поэтапное внедрение автоматизированной системы мониторинга движения лекарственных препаратов от производителя до конечного потребителя с использованием маркировки (кодификации) и идентификации упаковок лекарственных средств в целях обеспечения эффективного контроля качества ЛС, находящихся в обращении, и борьбы с их фальсификацией.
                  </p>

                  <div className="mt38 pageSubtitle">Основные цели маркировки и мониторинга движения лекарственных препаратов.</div>
                  <div className="mt38 fw600">Для государства:</div>
                  <ul className='mt38'>
                     <li>
                        профилактика поступления в оборот и одномоментное изъятие из оборота в автоматизированном режиме на всей территории Российской Федерации недоброкачественных, а также фальсифицированных и контрафактных лекарственных препаратов на любом из этапов их обращения от производителя до конечного потребителя;
                     </li>
                     <li>
                        профилактика неэффективных расходов и экономия бюджетных средств за счет невозможности реализации схем «повторного вброса» лекарственных препаратов, невозможности легальной реализации лекарственных препаратов, подлежащих предметно-количественному учету, а также не предназначенных для розничной продажи;
                     </li>
                     <li>
                        контроль адресности движения препаратов, закупаемых за счет бюджета, расходов на их приобретение; мониторинг ценообразования и предельных розничных цен на лекарственные препараты из списка ЖНВЛП;
                     </li>
                     <li>
                        оперативное планирование и управление запасами и резервами препаратов на всех уровнях, включая стратегический.
                     </li>
                  </ul>

                  <div className="mt38 fw600">Для населения:</div>
                  <ul className='mt38'>
                     <li>
                        возможность с помощью персонального мобильного устройства лично проверить легальность приобретаемого (получаемого) лекарственного препарата.
                     </li>
                  </ul>

                  <div className="mt38 fw600">Для бизнеса:</div>
                  <ul className='mt38'>
                     <li>
                        снижение издержек за счет более эффективного управления логистикой; уменьшение упущенной выгоды, обусловленной контрафактной и фальсифицированной продукцией; соответствие требованиям для поставок продукции на международные рынки.
                     </li>
                     <li>
                        Ключевые участники приоритетного проекта:
                     </li>
                     <li>
                        Минздрав России, Росздравнадзор, ФНС, Минпромторг России, Минфин России, Минкомсвязь России.
                     </li>
                     <li>
                        Информация по реализации проекта размещена и регулярно обновляется на официальном сайте Росздравнадзора в разделе «Система маркировки лекарственных препаратов».
                     </li>
                  </ul>
               </div>

            </div>
         </ContantContainerMain>
      </div>
   )
}
export default Healthcare;