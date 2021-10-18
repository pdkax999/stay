import axios from "axios";

const token ='UBgjIIzC+/bCvvm578KFgpP42OJDl7P8Q+WnIeFE2VXZ/s3KS+1NEAyPOL1lz+c8'

const myAxios = axios.create({
  baseURL: '/api', // 让代理服务器转发请求4000
  timeout: 20000 
});


myAxios.interceptors.request.use((config) => {
  
  config.headers['platform-token'] = token 
 
  return config
})

myAxios.interceptors.response.use(
  response => {

     if(response.status == 200){
      
      return response.data.data
     
    }else{

      console.log(response.msg);
    
     }
  },
  error => {

    return new Promise(() => {}) // 返回一个pending状态的promise => 中断promie链
 
  }
)


export default  myAxios 
