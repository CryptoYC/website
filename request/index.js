import * as Axios from "axios";

const axios = Axios.create();
axios.interceptors.response.use(
  response => {
    if (!/^(2|3)/.test(response.status)) {
      alert("请求失败222");
      return Promise.reject(response.status);
    }
    return response.data;
  },
  error => {
    alert("请求失败--");
    return Promise.reject(error);
  }
);
const url = str => {
  if(process.env.NODE_ENV !== 'production'){
      return `/api/${str}`
  }else{
      return `/${str}`
  }
  // return `http://cryptoyc.com:5000/${str}`;
};

export const survey_project = obj => {
  let headers = { headers: { "Content-Type": "multipart/form-data" } };
  return axios.post(url("survey/project"), obj, headers);
};

export const invest = obj => {
  return axios.get(url("invest"), obj);
};

export const community = obj => {
  return axios.get(url("community"), obj);
};

export const blog = obj => {
  return axios.get(url("blog"), obj);
};

export const about_contact = obj => {
  return axios.post(url("about/contact"), obj);
};

// 市场情绪指数
export const market_moon = obj => {
  return axios.get(url('survey/data/4'));
};

// 交易所排行
export const chainInfo = obj => {
  return axios.get(url('survey/data/1'));
};

// 活跃地址/价格
export const activePrice = obj => {
  return axios.get(url('survey/data/2'));
};
