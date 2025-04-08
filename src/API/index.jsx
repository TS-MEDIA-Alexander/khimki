import axios from 'axios';
/* import { useLocation } from "react-router-dom";

const { pathname } = useLocation(); */

const instance = axios.create({
   /* withCredentials: true,
   headers: {
      'API-KEY': 'Ключ'
   }, */
   baseURL: 'https://admhimki.ru/delara/public/api'
});

const API = {
   getNews: async (page = 1, limit = 12, dateFrom = '', dateTo = '', search = '') => {
      return instance.get(`content/news/list?page=${page}&limit=${limit}&dateFrom=${dateFrom}&dateTo=${dateTo}&search=${search}`)/*  */
         .then(response => response.data)
         .catch(() => {
            console.log('Error')
         })
   },
   getItemNews: async (id) => {
      return instance.get(`content/news/item?id=${id}`)
         .then(response => response.data)
         .catch(() => {
            console.log('Error')
         })
   },
   postSubscribeNews: async (email) => {
      return instance.post(`subscribe/add`, email)
         .then(response => response.data)
         .catch(() => {
            console.log('Error')
         })
   },
   postСomplaint: async (data) => {
      return instance.post(`support/ticket/add`, data)
         /* return axios.post(`https://dev.admhimki.ru/chek_file.php`, data) */
         .then(response => response.data)
         .catch(() => {
            console.log('Error')
         })
   },
}
export default API