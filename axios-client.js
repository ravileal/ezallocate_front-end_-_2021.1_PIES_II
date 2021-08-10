const axios = require('axios');

const baseUrl = 'http://localhost:3000';

const get = async (route, query) => {
  const result = await axios.get(`${baseUrl}/${route}`, {
    query,
  });

  return result.data;
};

const getById = async (route, id) => {
  const result = await axios.get(`${baseUrl}/${route}/${id}`);
  return result.data;
};

const post = async (route, data) => {
  const result = await axios.post(`${baseUrl}/${route}`, data);
  return result.data;
};

const put = async (route, data) => {
  const result = await axios.put(`${baseUrl}/${route}/${data.id}`, data);
  return result.data;
};

const remove = async (route, id) => {
  const result = await axios.delete(`${baseUrl}/${route}/${id}`);
  return result.data;
};

module.exports = {
  get,
  getById,
  post,
  put,
  remove,
};
