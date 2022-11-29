import axios from "axios";

const BASEURL = 'http://localhost:4000/api/items';

export const fetchItems = (params) => axios.get(`${BASEURL}`, { params })

export const getItem = (id) => axios.get(`${BASEURL}/${id}`)