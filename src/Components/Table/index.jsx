import React, { useEffect, useState } from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './Table.module.css';
import table from '../../backend/tables/table1.json';

const Table = (props) => {

   /* Временное решение. В дальнейшнм нужно написать парсер на бэке, чтобы пересоберал массив автоматически при загрузске json в базу */
   const utilsTableParser = (arr) => {
      const newObj = {}
      Object.keys(arr[0]).map(el => newObj[el] = el)
      return [newObj, ...table]
   }

   const [newTableState, setNewTableState] = useState(() => {
      return utilsTableParser(table)
   })

   const getСell = (obj) => {
      return Object.values(obj).map((el, i) => <div key={i} className={s.table}>{el === 'undefined' ? undefined : el}</div>)
   }

   return (
      <div>
         <ContantContainerMain>
            {newTableState.map((el, i) => <div key={i} className={s.tableRow}>
               {getСell(el)}
            </div>)}
         </ContantContainerMain>
         <br />
      </div>
   )
}
export default Table;