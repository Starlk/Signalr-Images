import axios from "axios"
import InitialForm from "../interface/form"

const SendForm = async (endpooint : string, form : InitialForm)=>
{
   let formData = new FormData();
   formData.append("name",form.name);
   formData.append("photo",form.photo);
   return await fetch(endpooint, 
    {
   method:"POST", 
   body:formData,
   })
   .then(e=>e.text())
   .catch(e=>e)
}


export default SendForm