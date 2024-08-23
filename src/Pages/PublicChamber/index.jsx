import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import СardAdministratiorStructure from '../../Components/СardAdministratiorStructure';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import s from './PublicChamber.module.css';
import yurkov from '../../assets/img/khimkiDistrict/PublicChamber/yurkov.png';
import vatutina from '../../assets/img/khimkiDistrict/PublicChamber/vatutina.png';
import batyshev from '../../assets/img/khimkiDistrict/PublicChamber/batyshev.png';
import gureva from '../../assets/img/khimkiDistrict/PublicChamber/gureva.png';

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
               <div className={`${s.link}`}>Члены Общественной палаты городского округа <div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></div>
               <NavLink to={ROUTER.khimkiDistrict.publicChamberDocuments} className={`mt24 ${s.link}`}>Документы <div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink to={ROUTER.khimkiDistrict.publicChamberCandidates} className={`mt24 ${s.link}`}>Кандидаты в члены муниципальной общественной палаты <div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink to={ROUTER.khimkiDistrict.listCommissionsPublicChamber} className={`mt24 ${s.link}`}>Перечень Комиссий Общественной палаты <div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
            </div>
            <div className={`mt80 ${s.personsContainerRow}`}>
               <СardAdministratiorStructure url={'lyovochka'} img={yurkov} jobTitle={'Председатель Общественной палаты г.о. Химки'} surname={'Ларченко'} name={'Владислав Петрович'} />
               <СardAdministratiorStructure url={'lyovochka'} img={vatutina} jobTitle={'Ответственный секретарь Общественной палаты г.о. Химки'} surname={'Каримов'} name={'Артур Маратович'} />
               <СardAdministratiorStructure url={'lyovochka'} img={batyshev} jobTitle={'Заместитель председателя Общественной палаты г.о. Химки'} surname={'Русакова'} name={'Ольга Вячеславовна'} />
               <СardAdministratiorStructure url={'lyovochka'} img={gureva} jobTitle={'Заместитель председателя Общественной палаты г.о. Химки'} surname={'Шаипов'} name={'Руслан Нариманович'} />
            </div>
            <div className={`mt80 ${s.title}`}>Цели и задачи общественной палаты городского округа химки </div>
            <ul>
               <li className='mt38'>Объединение граждан для осуществления эффективного местного самоуправления</li>
               <li>Общественный контроль за деятельностью органов местного самоуправления </li>
               <li>Помощь органам местного самоуправления в эффективном управлении вверенной территорией</li>
            </ul>
            <div className={`mt38 ${s.nameTitle}`}>Твеленёв Евгений Иванович</div>
            <div className={`${s.description}`}>Заместитель председателя Общественной палаты городского округа Химки</div>
            <div className={`mt38 ${s.title}`}>Чем конкретно занимается общественная палата?</div>
            <div className={`mt38 text`}>
               <p>
                  Полномочия и порядок работы Общественой палаты установлены Законом Московской области от 22 июля 2015 г. № 130/2015-ОЗ "«Об отдельных вопросах осуществления общественного контроля в Московской области»
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
            </div>
            <div className={`mt38 ${s.description}`}>Следите за новостями Общественной палаты </div>
            <div className={`mt38 ${s.btnText}`}>Общественная палата Московской области</div>
            <div className={`mt38 ${s.description}`}>Горячая линия и прием обращений  </div>
            <div className={`mt38 ${s.btnContainerRow}`}>
               <div className={`${s.btnText}`}>+7 (495) 230-52-54</div>
               <div className={`ml16 ${s.btnText} ${s.mobilMl}`}>info@op-khimki.ru</div>
            </div>


         </ContantContainerMain>
      </div>
   )
}
export default PublicChamber;