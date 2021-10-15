import myAxios from "@/api/myAxios";

export  const   reqChannelDataList=(page)=> myAxios.post('/osapi/Channel/getChannelDataList',{
  channel_id:'2',page
})