import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './Activity.module.css';
import { ROUTER } from '../../config';
import LinkContainer from '../../Components/LinkContainer';

const Activity = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className="mt80 pageTitle">Деятельность</div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <div className={s.column}>
                  <LinkContainer radial={true} link={ROUTER.activity.auctionsAndTrades} text='Аукционы и торги' />
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.safety} text='Безопасность' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.improvement} text='Благоустройство' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.publicPrivatePartnership} text='Государственно-частное партнерство' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.communalServices} text='ЖКХ' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.healthcare} text='Здравоохранение' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.land} text='Земельные участки многодетным семьям' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.landRelations} text='Земельные отношения' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.propertyRelations} text='Имущественные отношения' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.investities} text='Инвестиции' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.participatoryBudgeting} text='Инициативное бюджетирование' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.humanResourcesManagement} text='Кадровое управление' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.commissionJuvenileAffairs} text='Комиссия по делам несовершеннолетних и защите их прав' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.smallMediumBusinesses.main} text='Малое и среднее предпринимательство' />
                  </div>
               </div>
               <div className={s.column}>
                  <LinkContainer radial={true} link={ROUTER.activity.municipalСontrol} text='Муниципальный контроль' />
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.municipalPrograms} text='Муниципальные программы' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.socialPrograms} text='Социальные программы' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.outdoorAdvertising} text='Наружная реклама' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.regulatoryImpactAssessment} text='Оценка регулирующего воздействия' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.burialFuneralServices.main} text='Погребение и похоронное дело' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.supportCONPO} text='Поддержка СО НКО' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.authorityFeldHandlingAnimalsWithoutOwners} text='Полномочия в области обращения с животными без владельцев' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.antiCorruption} text='Противодействие коррупции' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.publicHearingsPublicDiscussions} text='Публичные слушания и общественые обсуждения' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={"https://old.admhimki.ru/okrug/deyatelnost/rekvizity-dohodov/"} text='Реквизиты доходов городского округа' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.construction} text='Строительство' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.transport} text='Транспорт' />
                  </div>
                  <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.ecologyEnvironmentalSafety} text='Экология и экологическая безопасность' />
                  </div>
                  {/* <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.memorialServicesCenter} text='Государственное бюджетное учреждение Московской области «Центр мемориальных услуг»' />
                  </div> */}
                  {/* <div className="mt20">
                     <LinkContainer radial={true} link={ROUTER.activity.commissionJuvenileAffairs} text='Комиссия по делам несовершеннолетних и защите их прав' />
                  </div> */}
               </div>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default Activity;