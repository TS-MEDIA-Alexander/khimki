import axios from 'axios';
import { getQuerySettings } from '../utils'
/* import { useLocation } from "react-router-dom";

const { pathname } = useLocation(); */

const hostname = window.location.hostname;
const currentURL = function () {
   if (hostname.includes("localhost")) {
      return "https://dev.admhimki.ru/"
   } else if (hostname.includes('dev.admhimki.ru')) {
      return "https://dev.admhimki.ru/"
   } else if (hostname.includes("admhimki.ru")) {
      return "https://admhimki.ru/"
   }
}()

const instance = axios.create({
   /* withCredentials: true,
    headers: {
       'API-KEY': 'Ключ'
    }, */
   baseURL: `${currentURL}laravel/public/api`,
});

const API = {
   /* getNews: async (page = 1, limit = 12, dateFrom = '', dateTo = '', search = '') => {
      return instance.get(`content/news/list?page=${page}&limit=${limit}&dateFrom=${dateFrom}&dateTo=${dateTo}&search=${search}`)
         .then(response => response.data)
         .catch(() => {
            console.log('Error')
         })
   }, */
   getNews: async (page = 1, limit = 12, type = '', favorite = "", search = "", dateFrom = "", dateTo = "") => {
      const querySettings = getQuerySettings(type)
      return instance
         .get(
            `content/news/list?page=${page}&limit=${limit}&favorite=${favorite}&search=${search}&${querySettings}&dateFrom=${dateFrom}&dateTo=${dateTo}`
         )
         .then((response) => response.data)
         .catch((err) => {
            console.log(`Error: ${err?.message}`)
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
   postLogin: async (data) => {
      return await instance
         .post("user/auth", data)
         .then((response) => response.data)
         .catch((err) => {
            console.log(`Error: ${err?.message}`)
         })
   },
   getLogout: async () => {
      return await instance
         .get("user/out")
         .then((response) => response.data)
         .catch((err) => {
            console.log(`Error: ${err?.message}`)
         })
   },

   postAddElement: async (data) => {
      return await instance
         .post(`content/add`, data)
         .then((response) => response.data)
         .catch((err) => {
            console.log(`Error: ${err?.message}`)
         })
   },

   postChangeElement: async (data) => {
      return await instance
         .post(`content/edit`, data)
         .then((response) => response.data)
         .catch((err) => {
            console.log(`Error: ${err?.message}`)
         })
   },
   postAddMultipleElementsPublick: async (data) => {
      const newData = new FormData();
      for (let key in data) {
         if (Array.isArray(data[key])) {
            data[key].forEach((el, i) => newData.append(`id[${i}]`, el))
         } else {
            newData.append(key, data[key])
         }
      }
      return await instance
         .post(`content/edit/list`, newData)
         .then((response) => response.data)
         .catch((err) => {
            console.log(`Error: ${err?.message}`)
         })
   },

}
export default API
