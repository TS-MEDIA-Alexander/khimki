import React from 'react';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './Symbolism.module.css';
import { NavLink } from 'react-router-dom';
import cityCoatArms from '../../assets/img/khimkiDistrict/Symbolism/gerb.png';
import cityCoatArmsDownload from '../../assets/img/khimkiDistrict/Symbolism/himki_gerb.svg';
import flag from '../../assets/img/khimkiDistrict/Symbolism/flag.png';
import flagDownload from '../../assets/img/khimkiDistrict/Symbolism/himki_flag.svg';
import Logo from '../../assets/img/khimkiDistrict/Symbolism/logo.png';
import logoDownload from '../../assets/img/khimkiDistrict/Symbolism/logo_download_svg.svg';
import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

import ustav from '../../assets/documents/khimkiDistrict/ustav_himki.pdf';

const Symbolism = (props) => {

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / Устав и символика</span>
            </div>
            <h1 className={`mt24 pageTitle`}>Устав и символика</h1>
            <div className={`mt80 ${s.subtitle}`}>Устав</div>
            <div className={`mt38 text`}>Совет депутатов городского округа Химки Московской области
               от имени граждан, проживающих на территории городского округа Химки Московской области, исходя из необходимости защиты и сохранения конституционных прав и свобод граждан и создания для них подобающих условий жизни, отдыха и трудовой деятельности принимает настоящий Устав городского округа Химки Московской области, который является основополагающим муниципальным нормативным правовым актом среди всех остальных актов, принимаемых органами местного самоуправления городского округа.</div>
            <div className={`mt40 borderMain`}>
               <DocumentContainerDownload type={'PDF'} document={ustav} documentName={'ustav-gorodskogo-okruga-khimki-moskovskoy-oblasti'} text='Устав городского округа Химки Московской области' date="06.02.2023" />
            </div>
            <div className={`mt80 ${s.subtitle}`}>Символика</div>
            <div className="mt40 borderMain">
               <div className={s.flexContainer}>
                  <div className={s.imgContainer}>
                     <img src={cityCoatArms} alt="" />
                  </div>
                  <div className={s.textContainer}>
                     <div className={`${s.textBodyCard}`}>
                        <div className={s.titleCard}>Герб</div>
                        <div className="mt24">
                           Звёзды и кентавр символизируют основные предприятия города, связанные с производством и разработкой
                           космических аппаратов: НПО «Энергомаш», НПО им. Лавочкина, МКБ «Факел».
                           Герб утверждён решением Совета депутатов Химкинского района от 5 февраля 1999 года (№ 19/2).
                           Внесён в Государственный геральдический регистр под № 425.
                        </div>
                     </div>
                     <a href={cityCoatArmsDownload}
                        download="himki_gerb"
                        target="_blank"
                        rel="noreferrer" className={s.btnCard}>Скачать SVG</a>
                  </div>
               </div>
            </div>
            <div className="mt40 borderMain">
               <div className={s.flexContainer}>
                  <div className={s.imgContainer}>
                     <img src={flag} alt="" />
                  </div>
                  <div className={s.textContainer}>
                     <div className={`${s.textBodyCard}`}>
                        <div className={s.titleCard}>Флаг</div>
                        <div className="mt24">
                           Кентавр символизирует единение разума человека и мощи природных сил, стремящихся к познанию неведомого и преодолению преград. Чёрный цвет поля соответствует в геральдике цвету космоса. Жёлтый (золотой) — это цвет солнца, символ разума, справедливости, богатства и великодушия, знак земного и небесного величия. Флаг утверждён 2 сентября 2004 года.
                        </div>
                     </div>
                     <a
                        href={flagDownload}
                        download="himki_flag"
                        target="_blank"
                        rel="noreferrer"
                        className={s.btnCard}>Скачать SVG</a>
                  </div>
               </div>
            </div>
            <div className="mt40 borderMain">
               <div className={s.flexContainer}>
                  <div className={s.imgContainer}>
                     <img src={Logo} alt="" />
                  </div>
                  <div className={s.textContainer}>
                     <div className={`${s.textBodyCard}`}>
                        <div className={s.titleCard}>Логотип</div>
                        <div className="mt24">
                           Химки – это территория новых возможностей. Здесь жизнь постоянно меняется к лучшему, здесь думают о людях и модернизируют инфраструктуру так, чтобы жителям было удобно и комфортно.
                        </div>
                     </div>
                     <a
                        href={logoDownload}
                        download="himki_logo"
                        target="_blank"
                        rel="noreferrer" className={s.btnCard}>Скачать SVG</a>
                  </div>
               </div>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default Symbolism;
