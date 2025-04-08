import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './PublicChamber.module.css';

import ContantContainerMain from '../../total/ContantContainerMain';
import СardAdministratiorStructure from '../../Components/СardAdministratiorStructure';
import LinkContainer from '../../Components/LinkContainer';

import pronin from '../../assets/img/Persons/pronin.png';
import gerb from '../../assets/img/Persons/img.png';
import dolzhkova from '../../assets/img/Persons/dolzhkova.png';
import gorovoy from '../../assets/img/Persons/gorovoy.png';

const PublicChamber = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / Общественная палата</span>
            </div>
            <div className="mt24 pageTitle">Общественная палата</div>
            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/okrug/obshestvennaya-palata/chleny-obshestvennoj-palaty-gorodskogo-okruga/' text={'Члены Общественной палаты городского округа'} />
               <div className="mt20"><LinkContainer link={ROUTER.khimkiDistrict.publicChamberDocuments} text={'Документы'} /></div>
               <div className="mt20"><LinkContainer link={ROUTER.khimkiDistrict.publicChamberCandidates} text={'Кандидаты в члены муниципальной общественной палаты'} /></div>
               <div className="mt20"><LinkContainer link={ROUTER.khimkiDistrict.listCommissionsPublicChamber} text={'Перечень Комиссий Общественной палаты'} /></div>
            </div>
            <div className={`mt80 ${s.personsContainerRow}`}>
               <СardAdministratiorStructure url={'pronin'} img={pronin} jobTitle={'Председатель Общественной палаты г.о. Химки'} surname={'Пронин'} name={'Александр Александрович'} />
               <СardAdministratiorStructure url={'lyovochka'} img={gerb} jobTitle={'Ответственный секретарь '} surname={'Лаврухина'} name={'Анна Сергеевна'} />
               <СardAdministratiorStructure url={'gorovoy'} img={gorovoy} jobTitle={'Заместитель председателя по работе с Общественной палатой Московской области'} surname={'Горовой'} name={'Егор Юрьевич'} />
               <СardAdministratiorStructure url={'dolzhkova'} img={dolzhkova} jobTitle={'Заместитель председателя по работе с комиссиями Общественной палаты г.о. Химки'} surname={'Должкова'} name={'Ирина Николаевна'} />
            </div>
            <div className={`mt80 pageSubtitle`}>Цели и задачи общественной палаты городского округа Химки </div>
            <ul>
               <li className='mt38'>Объединение граждан для осуществления эффективного местного самоуправления</li>
               <li>Общественный контроль за деятельностью органов местного самоуправления </li>
               <li>Помощь органам местного самоуправления в эффективном управлении вверенной территорией</li>
            </ul>

            <div className={`mt38 text`}>
               <div className={`mt38 pageSubtitle`}>Чем конкретно занимается общественная палата?</div>
               <p>
                  Полномочия и порядок работы Общественой палаты установлены Законом Московской области от 22 июля 2015 г. № 130/2015-ОЗ «Об отдельных вопросах осуществления общественного контроля в Московской области»
               </p>
               <p>
                  Общественная палата организовывает и проводит гражданские форумы, общественные слушания, «круглые столы», семинары и другие мероприятия по актуальным вопросам жизни округа.
               </p>
               <p>
                  Палата ведет учет общественнозначимых законных интересов и мнений граждан. Защита их прав и свобод при формировании и реализации муниципальной политики в наиболее важных вопросах экономического и социального развития делегируется профессиональным кадрам.
               </p>
               <p>
                  В соответствии с Положением и Регламентом Общественная палата имеет право учреждать общественные награды для поощрения населения, общественных и некоммерческих организаций, принимающих наиболее активное участие в ее работе.
                  Созданы общественные комиссии.
               </p>
               <p>
                  Комиссии осуществляют предварительное изучение материалов, предоставленных к рассмотрению на заседаниях Общественной палаты, готовят проекты заключений о возможных нарушениях законодательства. В их полномочия также входит организация публичных мероприятий, проведение анализа состояния дел в различных сферах общественной жизни. К своей работе они могут привлекать различные объединения и граждан, не вошедших в состав Общественной палаты, таким образом обеспечивая наибольшую прозрачность своих действий. Комиссии создаются на основе регулярной деятельности различных организаций, присутствующих на территории округа, а также отталкиваясь от естественного течения социальной жизни. Таким образом, их может быть шесть: по развитию гражданского общества, межнациональным и межконфессиональным отношениям, информационной политике и свободе слова в средствах массовой информации; по образованию, науке, культуре, спорту, туризму и формированию здорового образа жизни; по здравоохранению, социальной политике, трудовым отношениям и пенсионному обеспечению; по делам ветеранов, военнослужащих и членов их семей; по местному самоуправлению и жилищной политике; по экономическому развитию и поддержке предпринимательства.
               </p>
               <div className={`mt38 ${s.description}`}>Следите за новостями Общественной палаты </div>
               <a href={'https://opmosreg.ru/munitsipalnye-op/13278/'} target="_blank" className={`mt38 oval`}>Общественная палата Московской области</a>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default PublicChamber;