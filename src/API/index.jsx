import axios from 'axios';

const instance = axios.create({
   /* withCredentials: true,
   headers: {
      'API-KEY': 'Ключ'
   }, */
   baseURL: 'http://dev.admhimki.ru/api/'

});

const API = {
   getNews: async (page = 1, limit = 12) => {
      return instance.get(`news/getListNews.php?page=${page}&limit=${limit}`)
         .then(response => response.data)
         .catch(() => {
            console.log('Error')
         })
   },
   getItemNews: async (id) => {
      return instance.get(`news/getItemNews.php?id=${id}`)
         .then(response => response.data)
         .catch(() => {
            console.log('Error')
         })
   }

}
export default API