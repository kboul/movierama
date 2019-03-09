import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

export const API_KEY: string = '403de008d246c1252605ab3f69af4bb8'

export default {
    get: axios.get
}