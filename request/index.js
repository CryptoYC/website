import * as Axios from 'axios';

const axios=Axios.create()
axios.interceptors.response.use((response)=>{
    
    if(!/^(2|3)/.test(response.status)){
        alert('请求失败')
        return Promise.reject(response.status)
    }
    return response;
},(error)=>{
    
    alert('请求失败')
    return Promise.reject(error)
})
const url =(str)=>{
    
    if(process.env.NODE_ENV !== 'production'){
        return `/api/${str}`
    }else{
        return `/${str}`
    }
}
export const survey_project=(obj)=>{
    let headers = {headers: {"Content-Type": "multipart/form-data"}}
    return axios.post(url('survey/project'),obj,headers)
}
export const invest =(obj)=>{
    return axios.get(url('invest'),obj)
}
export const community =(obj)=>{
    return axios.get(url('community'),obj)
}
export const blog =(obj)=>{
    return axios.get(url('blog'),obj)
}
export const about_contact =(obj)=>{
    return axios.post(url('about/contact'),obj)
}
