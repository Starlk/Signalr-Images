import axios from "axios"
import axiosHttp from "../axios-http";
import InitialForm from "../interface/form"

const SendForm = async (endpooint : string, form : InitialForm)=>
{
   let formData = new FormData();
   formData.append("name",form.name);
   formData.append("photo",form.photo);
   return axiosHttp.post(endpooint,formData)
}


export default SendForm